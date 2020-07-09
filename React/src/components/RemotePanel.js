import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { FaArrowUp, FaArrowDown } from "react-icons/fa"

export const RemotePanel = () => {

  const { elevatorUp, elevatorDown } = useContext(GlobalContext);
    
  const onChangeElevatorButton = elevatorButton => {
    
    switch (elevatorButton) {
      case "Down": {
        elevatorUp();
        break;
      }
      case "Up": {
        elevatorDown();
        break;
      }  
      default:
        break;
    }
  }

  return (
    <>
      <h3>Remote panel</h3>
      <div className="remotePanel">
        <div className="remotePanel--control">
          <FaArrowUp className="remotePanel--icon" color='green' size="4rem" onClick={(e) => onChangeElevatorButton('Up')}></FaArrowUp>
        </div>
        <div className="remotePanel--control">
          <FaArrowDown className="remotePanel--icon" color='red' size="4rem" onClick={(e) => onChangeElevatorButton('Down')}></FaArrowDown>
        </div>
      </div>
    </>
  )
}
