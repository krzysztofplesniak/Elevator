export default (state, action) => {
	switch (action.type) {

		case 'GET_ELEVATORS':
			return {
				...state,
				loading: false,
				elevators: action.payload,
			};
			
		case 'EXPECTED_TIME':
			return {
				...state,
				expectedTime: action.payload,
			};

		case 'ELEVATOR_IS_MOVING':
			return {
				...state,
				elevatorIsMoving: { elvId: action.payload, isMoving: true },
			};

		case 'ELEVATOR_IS_STOPPED':
			return {
				...state,
				elevatorIsMoving: { elvId: 0, isMoving: false },
				expectedTime: null,
			};

		case 'SET_ELEVATOR_HISTORY':
			return {
				...state,
				elevatorHistory: [...state.elevatorHistory, action.payload],
			};

		case 'CALL_ELEVATOR':
			return {
				...state,
			};

		case 'ELEVATOR_UP':
			return {
				...state,
			};

		case 'ELEVATOR_DOWN':
			return {
				...state,
			};
		
		// it could nbe in another part of context in next edition od app
		case 'GET_ELEVATORS_ERORR':
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};
