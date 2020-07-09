import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  //{ id: 'elv0', floor: 0, state: 'stopped' },
  elevatorHistory: [
    { id: 'elv0', floor: 7, time: 15, direction: 'up'},
    { id: 'elv1', floor: 1, time: 3, direction: 'down'},
    { id: 'elv2', floor: 3, time: 5, direction: 'down'},
    { id: 'elv0', floor: 5, time: 8, direction: 'up'},
    { id: 'elv1', floor: 4, time: 7, direction: 'down'},
    { id: 'elv2', floor: 9, time: 20, direction: 'down'},
    { id: 'elv2', floor: 2, time: 5, direction: 'up'},
    { id: 'elv0', floor: 7, time: 8, direction: 'down'},
    { id: 'elv1', floor: 8, time: 7, direction: 'down'},
    { id: 'elv0', floor: 1, time: 20, direction: 'down'},
    { id: 'elv2', floor: 3, time: 5, direction: 'up'},
    { id: 'elv0', floor: 8, time: 8, direction: 'down'},
    { id: 'elv1', floor: 3, time: 7, direction: 'up'},
    { id: 'elv2', floor: 6, time: 20, direction: 'down'}
  ],
  elevator1: { floor: 9, state: 'move' },
  elevator2: { floor: 3, state: 'stop' },
  elevator3: { floor: 5, state: 'stop' },
  expectedTime: 5
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function elevatorUp() {
    console.log(`Button UP`);
    dispatch({
      type: 'ELEVATOR_UP'
    });
  }

  function elevatorDown() {
    console.log(`Button DOWN`);
    dispatch({
      type: 'ELEVATOR_DOWN'
    });
  }

  return (<GlobalContext.Provider 
    value={{
      elevatorHistory: state.elevatorHistory,
      expectedTime: state.expectedTime,
      elevator1: state.elevator1,
      elevator2: state.elevator2,
      elevator3: state.elevator3,
      elevatorUp,
      elevatorDown
    }}>
      <div className="container">
        {children}
      </div>
  </GlobalContext.Provider>);
}