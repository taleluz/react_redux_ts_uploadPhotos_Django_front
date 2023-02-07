import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Gal } from './features/gal/Gal';
import Upl from './features/gal/Upl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Upl></Upl>
        <Gal></Gal>
        
      </header>
    </div>
  );
}

export default App;
