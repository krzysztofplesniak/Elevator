import React, { useEffect, createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

// Initial state of app
const initialState = {
	elevators: [],
	elevatorIsMoving: { elvId: 0, isMoving: false },
	expectedTime: null,
	loading: true,
	elevatorHistory: [],
	error: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// GlobalProvider component state
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Subscribe SSE event message "move"
	useEffect(() => {
		let eventSource = new EventSource('http://localhost:8080/stream');

		eventSource.onmessage = evt => {
			const { id, floor, state, targetFloor } = JSON.parse(evt.data);

			//console.log('Elevator SSE message ', { id, floor, state, targetFloor });

			if (state === 'up' || state === 'down') {
				dispatch({ type: 'ELEVATOR_IS_MOVING', payload: parseInt(id.slice(3, 4)) + 1});
			} else {
				dispatch({ type: 'ELEVATOR_IS_STOPPED' });
			}

			setElevatorHistory({ id, floor, state, targetFloor });
			expectedTime(targetFloor, floor);
			getElevators();
		};
	}, []);

	// Helpers/utils methods
	const setElevatorHistory = elevatorHistory => {
		dispatch({
			type: 'SET_ELEVATOR_HISTORY',
			payload: elevatorHistory,
		});
	};

	const expectedTime = (targetFloor, floor) => {
		if (targetFloor) {
			const expectedTimeforElevator = Math.abs(targetFloor - floor) + 1;
			//console.log('expectedTimeforElevator ', expectedTimeforElevator);
	
			if (expectedTimeforElevator) {
				dispatch({
					type: 'EXPECTED_TIME',
					payload: expectedTimeforElevator,
				});
			}
		}
	};

	// Actions dispatcher helpers
	const getElevators = async () => {
		const response = await fetch('http://localhost:8080/elevators');
		const elevators = await response.json();

		dispatch({
			type: 'GET_ELEVATORS',
			payload: elevators,
		});
	};

	const callElevator = elevatorID => {
		
		//const response = await axios.put(`http://localhost:8080/floor/${elevatorID}`);
		axios.put(`http://localhost:8080/floor/${elevatorID}`);
		
		dispatch({
			type: 'CALL_ELEVATOR',
			payload: elevatorID
		});
	};

	const elevatorUp = () => {
		console.log(`Button UP`);
		dispatch({
			type: 'ELEVATOR_UP',
		});
	};

	const elevatorDown = () => {
		console.log(`Button DOWN`);
		dispatch({
			type: 'ELEVATOR_DOWN',
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				elevators: state.elevators,
				expectedTime: state.expectedTime,
				elevatorIsMoving: state.elevatorIsMoving,
				loadig: state.loading,
				elevatorHistory: state.elevatorHistory,
				error: state.error,
				elevatorUp,
				elevatorDown,
				callElevator,
				getElevators,
			}}>
			<div className='container'>{children}</div>
		</GlobalContext.Provider>
	);
};
