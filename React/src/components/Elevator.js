import React from 'react';

export const Elevator = ({ elevator }) => {
  
  return (
    <div className='elevatorList--element'>
      <div className='elevatorList--element__span'>Elevator 
        <span className='elevatorList--element__bold'>{elevator.id.slice(3,4)}</span>
      </div>
      <div className='elevatorList--element__span'>floor #
        <span className='elevatorList--element__bold'>{elevator.floor}</span>
      </div>
      <div className='elevatorList--element__span'>expected time
        <span className='elevatorList--element__bold'>{elevator.time}</span>
      </div>
      <div className='elevatorList--element__direction'>
        {elevator.direction === 'up'? <span>UP</span> : <span>DOWN</span>}
      </div>
    </div>
  )
}
