import React, { useContext } from 'react';
import { DigitalDigit } from "digital-digit";
import { GlobalContext } from '../context/GlobalState';

export const ElevatorDisplay = () => {
  
  const { elevator1, elevator2, elevator3 } = useContext(GlobalContext);
  
  //elevator1: { floor: 9, state: 'move' },

  return (
    <div className="elevatorDisplay">
      <div className="elevatorDisplay--panel">
        <div className="elevatorDisplay--digitalDigit">
            <DigitalDigit digit={2} color="blue" opacitySegment={0.5} />
        </div>
        <p className="elevatorDisplay--info">{elevator1.state.toUpperCase()}</p>
      </div>
      <div className="elevatorDisplay--panel"> 
        <div className="elevatorDisplay--digitalDigit">
          <DigitalDigit  digit={5} color="red" opacitySegment={0.5} />
        </div>
        <p className="elevatorDisplay--info">{elevator2.state.toUpperCase()}</p>
      </div>
      <div className="elevatorDisplay--panel">
        <div className="elevatorDisplay--digitalDigit">
          <DigitalDigit  digit={7} color="green" opacitySegment={0.5} />
        </div>
        <p className="elevatorDisplay--info">{elevator3.state.toUpperCase()}</p>
      </div>
    </div>
  )
}
