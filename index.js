const express = require("express");
const SSE = require("express-sse");
const cors = require("cors");
const ElevatorController = require("./elevator-controller");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({path: './production.env'});


const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV;
		
const app = express();
const sse = new SSE();
const elevatorController = new ElevatorController(3, 10);
elevatorController.start();

app.use(cors());
app.use(express.json());

elevatorController.on("move", (evt) => sse.send(evt));

app.get("/ping", (req, res) => res.send("pong"));
app.get("/stream", sse.init);
app.get("/elevators", (req, res) => res.send(elevatorController.elevators));
app.get("/building", (req, res) => res.send(elevatorController.building));
app.put("/floor/:number", (req, res) => {
  const elevator = elevatorController.callElevator(
    Number.parseInt(req.params.number)
  );
  res.send(elevator);
});

// for production purposes when is deployed on Heroku
if (env === 'production') {
  //Static folder
  app.use(express.static('React/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'React','build','index.html'))

  });
}

app.use("/", (req, res) => res.status(404).send({ error: `Resource not found, port is ${port}` }));

app.listen(port, () =>
  console.log(`Elevator backend listening at http://localhost:${port}`)
);
