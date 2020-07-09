import React from 'react';
import { Header } from './components/Header';
import { ElevatorDisplay } from './components/ElevatorDisplay';
import { ElevatorHistory } from './components/ElevatorHistory';
import { RemotePanel } from './components/RemotePanel';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <ElevatorDisplay />
      <RemotePanel />
      <ElevatorHistory />
    </GlobalProvider>
  );
}

export default App;
