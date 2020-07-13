import React, { useEffect, createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

// Initial state of app
const initialState = {
	elevators: [],
	elevatorIsMoving: { elvId: 0, isMoving: false },
	expectedTime: null,
	elevatorHistory: [],
	loading: true,
	error: null,
};

// Create context by useHook
export const GlobalContext = createContext(initialState);

// GlobalProvider component state
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Subscribe SSE event message "move"
	useEffect(() => {
		let eventSource = new EventSource('/stream');

		eventSource.onmessage = evt => {
			const { id, floor, state, targetFloor } = JSON.parse(evt.data);

			if (state === 'up' || state === 'down') {
				dispatch({ type: 'ELEVATOR_IS_MOVING', payload: parseInt(id.slice(3, 4)) + 1});
			} else {
				dispatch({ type: 'ELEVATOR_IS_STOPPED' });
			}

			const newElevatorHistory = ({ id, floor, state, targetFloor });

			setElevatorHistory(newElevatorHistory);
			expectedTime(targetFloor, floor);
			getElevators();
		};
	}, []);

	// Helpers/utils methods
	const setElevatorHistory = newElevatorHistory => {
		dispatch({
			type: 'SET_ELEVATOR_HISTORY',
			payload: newElevatorHistory,
		});
	};

	//Counting expected time arrival the elevator  
	const expectedTime = (targetFloor, floor) => {
		if (targetFloor) {

			const expectedTimeforElevator = Math.abs(targetFloor - floor) + 1;
	
			if (expectedTimeforElevator) {
				dispatch({
					type: 'EXPECTED_TIME',
					payload: expectedTimeforElevator,
				});
			}
		}
	};

	// Actions dispatcher helpers for menage state of application
	// get information about status of elevator from backend
		const getElevators = async () => {
		const response = await fetch('/elevators');
		const elevators = await response.json();

		dispatch({
			type: 'GET_ELEVATORS',
			payload: elevators,
		});
	};

	// calling 'free" elevator by clicking the button on particular level/stage in building
	const callElevator = elevatorID => {
				
		axios.put(`/floor/${elevatorID}`);
		
		dispatch({
			type: 'CALL_ELEVATOR',
			payload: elevatorID
		});
	};

	// methods for menage elevator when user is inside 
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
				elevatorHistory: state.elevatorHistory,
				loadig: state.loading,
				error: state.error,
				getElevators,
				callElevator,
				elevatorUp,
				elevatorDown
			}}>
			<div className='container'>{children}</div>
		</GlobalContext.Provider>
	);
};
