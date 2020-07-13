import React from 'react';

export const Elevator = ({ elevator: { id, floor, state, targetFloor } }) => {
	return (
		<div className='elevatorList--element'>
			<div className='elevatorList--element__span'>
				Elevator
				<span className='elevatorList--element__bold'>
					{parseInt(id.slice(3, 4)) + 1}
				</span>
			</div>
			<div className='elevatorList--element__span'>
				Floor #<span className='elevatorList--element__bold'>{floor}</span>
			</div>
			<div className='elevatorList--element__span'>
				Target floor #
				<span className='elevatorList--element__bold'>{targetFloor}</span>
			</div>
			<div className='elevatorList--element__direction'>
				<span>{state.toUpperCase()}</span>
			</div>
		</div>
	);
};
