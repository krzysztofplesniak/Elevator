import React from 'react';

export const Elevator = ({ elevator: { id, floor, state, targetFloor } }) => {
	return (
		<div className='elevatorList__element'>
			<div className='elevatorList__element--span'>
				Elevator
				<span className='elevatorList__element--bold'>
					{parseInt(id.slice(3, 4)) + 1}
				</span>
			</div>
			<div className='elevatorList__element--span'>
				Floor #<span className='elevatorList__element--bold'>{floor}</span>
			</div>
			<div className='elevatorList__element--targetFloor '>
				Target floor #
				<span className='elevatorList__element--bold'>{targetFloor}</span>
			</div>
			<div className='elevatorList__element--direction'>
				<span>{state.toUpperCase()}</span>
			</div>
		</div>
	);
};
