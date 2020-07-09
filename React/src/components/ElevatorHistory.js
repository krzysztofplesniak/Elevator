import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { Elevator } from './Elevator';
import { GlobalContext } from '../context/GlobalState';

export const ElevatorHistory = () => {

  const { elevatorHistory } = useContext(GlobalContext);
  // @desc Reduce length of history to last 7 position
  const lastElevatorHistory = elevatorHistory.slice(elevatorHistory.length - 7,elevatorHistory.length);
    
  return (
    <>
      <h3>History elevator calling</h3>
      <div className="elevatorList">
         {lastElevatorHistory.map(elevator => 
            <Elevator key={uuid()} elevator={elevator} />
        )}
      </div>
    </>
  )
}
