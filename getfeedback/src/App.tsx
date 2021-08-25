import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TileList } from './TileList';

const items: string[] = ["Good comment", "Bad Comment", "Medium Comment"]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to COURSE NAME
        </p>
        <p>
            By Isaac Young and George Powell
        </p>
        <TileList items={items}/>
      </header>
    </div>
  );
}

export default App;
