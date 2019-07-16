import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import './test.scss';
import Score from './components/Score';
import Selection from './components/Selection';

const App = () => (
  <>
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <div>
              <Score score={0} />
            </div>
            <div>
              <Selection word={`TAPWORD`} />
            </div>
          </div>

          <div style={{ minHeight: '8px', maxHeight: '8px' }}>&nbsp;</div>

          <div className="flex-centered">
            <div className="grid-container">
              <div className="grid-new">
                <div className="cell-new">A</div>
                <div className="cell-new">B</div>
                <div className="cell-new">C</div>
                <div className="cell-new">D</div>
                <div className="cell-new">E</div>

                <div className="cell-new">F</div>
                <div className="cell-new">G</div>
                <div className="cell-new">H</div>
                <div className="cell-new">I</div>
                <div className="cell-new">J</div>

                <div className="cell-new">K</div>
                <div className="cell-new">L</div>
                <div className="cell-new">M</div>
                <div className="cell-new">N</div>
                <div className="cell-new">O</div>

                <div className="cell-new">P</div>
                <div className="cell-new">Q</div>
                <div className="cell-new">R</div>
                <div className="cell-new">S</div>
                <div className="cell-new">T</div>

                <div className="cell-new">U</div>
                <div className="cell-new">V</div>
                <div className="cell-new">W</div>
                <div className="cell-new">X</div>
                <div className="cell-new">Y</div>
              </div>
            </div>

            <div className="grid-sidebar">
              <div className="grid-gameplay">
                <div className="cell-new">1</div>
                <div className="cell-new">2</div>
                <div className="cell-new">3</div>
                <div className="cell-new">4</div>
                <div className="cell-new">5</div>
              </div>

              <div className="grid-actions">
                <div className="cell-new">1</div>
                <div className="cell-new">2</div>
                <div className="cell-new">3</div>
                <div className="cell-new">4</div>
                <div className="cell-new">5</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
