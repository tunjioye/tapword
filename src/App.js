import React from 'react';
import './App.css';
// import Topbar from './components/Topbar';
import Grid from './components/Grid';
import Settings from './components/Settings';
import Help from './components/Help';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div style={{ display: 'block' }}>
          <Topbar />
        </div> */}
        <Grid cellToggle={true} shuffle={true} shuffleAll={true} endless={true} />
      </header>
      <Settings />
      <Help />
    </div>
  );
}

export default App;
