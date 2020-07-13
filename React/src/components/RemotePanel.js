import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { DigitalDigit } from 'digital-digit';

export const RemotePanel = () => {
	const { callElevator } = useContext(GlobalContext);

	const elevatorButton = elevatorID => {
		callElevator(elevatorID);
	};

	return (
		<>
			<h3>Remote panel</h3>
			<div className='remotePanel'>
				{[1, 2, 3, 4, 5, 6, 7, 8].map(buttonDigit => (
					<div
						key={buttonDigit}
						className='remotePanel__control'
						onClick={() => elevatorButton(buttonDigit)}>
						<DigitalDigit digit={buttonDigit} color='blue' opacitySegment={0.5} />
					</div>
				))}
			</div>
		</>
	);
};
