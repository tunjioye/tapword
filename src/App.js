import React from 'react';
import './App.css';
import Grid from './components/Grid';
import spellcheck from './spellcheck';

spellcheck.get('?text=tap')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    error = error.toJSON();
    console.log((error.description) ? (error.message + ':', error.description) : error.message);
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid />
      </header>
    </div>
  );
}

export default App;
