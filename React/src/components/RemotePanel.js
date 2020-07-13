import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { DigitalDigit } from 'digital-digit';
//import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export const RemotePanel = () => {
	const { callElevator } = useContext(GlobalContext);

	const elevatorButton = elevatorID => {
		callElevator(elevatorID);
	};

	// switch (elevatorButton) {
	// 	case 'Down': {
	// 		elevatorDown();
	// 		break;
	// 	}
	// 	case 'Up': {
	// 		elevatorUp();
	// 		break;
	// 	}
	// 	default:
	// 		break;
	// }

	return (
		<>
			<h3>Remote panel</h3>
			<div className='remotePanel'>
				{[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
					<div
						key={el}
						className='remotePanel--control'
						onClick={i => elevatorButton(el)}>
						<DigitalDigit digit={el} color='blue' opacitySegment={0.5} />
					</div>
				))}
				{/* <div className='remotePanel--control'>
					<FaArrowUp
						className='remotePanel--icon'
						color='green'
						size='4rem'
						// onClick={e => onChangeElevatorButton('Up')}
					></FaArrowUp>
				</div>
				<div className='remotePanel--control'>
					<FaArrowDown
						className='remotePanel--icon'
						color='red'
						size='4rem'
						// onClick={e => onChangeElevatorButton('Down')}
					></FaArrowDown>
				</div> */}
			</div>
		</>
	);
};
