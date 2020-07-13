import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {
	const {
		expectedTime,
		elevatorIsMoving: { isMoving },
	} = useContext(GlobalContext);

	return (
		<>
			<h1>SkyTower Wrocław</h1>
			{isMoving ? (
				<>
					<h2>
						<span>{`Expected time ${expectedTime} `}</span>
						{expectedTime === 1 ? 'second' : 'seconds'}
					</h2>
				</>
			) : (
				<h2>Elevator is waiting ...</h2>
			)}
		</>
	);
};
