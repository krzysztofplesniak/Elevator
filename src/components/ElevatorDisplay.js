import React, { useEffect, useContext } from 'react';
import { DigitalDigit } from 'digital-digit';
import { GlobalContext } from '../context/GlobalState';

export const ElevatorDisplay = () => {
	const { elevators, loading, getElevators, elevatorIsMoving: { elvId, isMoving } } = useContext(GlobalContext);
	const [ elevator1, elevator2, elevator3 ] = elevators;

	useEffect(() => {
		getElevators();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{!loading && elevators.length > 0 && (
				<div className='elevatorDisplay'>
					<div className='elevatorDisplay__panel'>
						<div className='elevatorDisplay__digitalDigit'>
							<DigitalDigit
								digit={elevator1.floor}
								color={(elvId === 1 && isMoving) ? 'red' : 'green'}
								opacitySegment={0.5}
							/>
						</div>
						<p className='elevatorDisplay__info'>
							{elevator1.state.toUpperCase()}
						</p>
					</div>
					<div className='elevatorDisplay__panel'>
						<div className='elevatorDisplay__digitalDigit'>
							<DigitalDigit
								digit={elevator2.floor}
								color={(elvId === 2 && isMoving) ? 'red' : 'green'}								opacitySegment={0.5}
							/>
						</div>
						<p className='elevatorDisplay__info'>
							{elevator2.state.toUpperCase()}
						</p>
					</div>
					<div className='elevatorDisplay__panel'>
						<div className='elevatorDisplay__digitalDigit'>
							<DigitalDigit
								digit={elevator3.floor}
								color={(elvId === 3 && isMoving) ? 'red' : 'green'}
								opacitySegment={0.5}
							/>
						</div>
						<p className='elevatorDisplay__info'>
							{elevator3.state.toUpperCase()}
						</p>
					</div>
				</div>
			)}
		</>
	);
};
