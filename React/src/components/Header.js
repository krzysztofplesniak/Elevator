import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {
  
  const { expectedTime } = useContext(GlobalContext);
  
  return (
    <>
        <h1>SkyTower Wrocław</h1>
        <h2>Expected time {expectedTime} {expectedTime > 1 ? 'seconds' : 'second'}</h2>
    </>
  )
}
