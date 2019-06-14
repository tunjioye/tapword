import React from 'react';
import './App.css';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid cellToggle={true} shuffle={false} shuffleAll={true} />
      </header>
    </div>
  );
}

export default App;
