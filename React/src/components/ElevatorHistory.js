import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { Elevator } from './Elevator';
import { GlobalContext } from '../context/GlobalState';

export const ElevatorHistory = () => {
	const { elevatorHistory } = useContext(GlobalContext);

	// @desc Reduce length of history to last 7 position
	let lastElevatorHistory = null;

	if (elevatorHistory.length > 6) {
		lastElevatorHistory = elevatorHistory.slice(elevatorHistory.length - 7,elevatorHistory.length);
	} else lastElevatorHistory = elevatorHistory;

	return (
		<>
			<h3>History of elevators calling</h3>
			<div className='elevatorList'>
				{lastElevatorHistory.map(elevator => (
					<Elevator key={uuid()} elevator={elevator} />
				))}
			</div>
		</>
	);
};
