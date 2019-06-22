import React from 'react';

class Play extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newGame: props.newGame,
      size: props.size,
      minutes: props.minutes
    }
  }
  render() {
    const gridSizes = [];
    [3,4,5,6,7].forEach((x,i) => {
      if (x === this.props.size) {
        gridSizes[i] = <div key={i.toString()} className="grid-box grid-size selected" onClick={this.props.handleGridSizeClick}>{x}</div>
      } else {
        gridSizes[i] = <div key={i.toString()} className="grid-box grid-size" onClick={this.props.handleGridSizeClick}>{x}</div>
      }
    });
    const timerMinutes = [];
    [0,1,2,3,4,5,6,7,8,9,10].forEach((x,i) => {
      if (x === this.props.minutes) {
        timerMinutes[i] = <div key={i.toString()} className="grid-box grid-minute selected" onClick={this.props.handleMinuteClick}>{x}</div>
      } else {
        timerMinutes[i] = <div key={i.toString()} className="grid-box grid-minute" onClick={this.props.handleMinuteClick}>{x}</div>
      }
    });
    return (
      <div className="modal" id="play">
        <span className="modal-overlay" style={{ background: 'rgb(25, 28, 34)' }}></span>
        <div className="modal-container">
          <div className="modal-header">
            {/* <a href="#close" className="btn btn-clear" aria-label="Close"> </a> */}
            <div className="modal-title">
              <strong style={spacedTypo}>NEW GAME</strong>
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <div>
                <h5 style={spacedTypo}>GRID SIZE</h5>
                <div>...</div>
                <div>&nbsp;</div>
                <div className="grid-box-container" data-size={this.props.size}>
                  {gridSizes}
                </div>
              </div>
              <br />
              <br />
              <div>
                <h5 style={spacedTypo}>TIMER</h5>
                <div>...</div>
                <div>&nbsp;</div>
                <div className="grid-box-container" data-size={this.props.size}>
                  {timerMinutes}
                </div>
                <div style={{ marginTop: '.4rem' }}><em><small>select 0 for endless mode</small></em></div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div style={{ ...spacedTypo, ...textCenter }}><button style={saveButton} onClick={this.props.startNewGame}>Start New Game</button></div>
          </div>
        </div>
      </div>
    );
  }
}

const spacedTypo = {
  letterSpacing: '0.1rem',
  wordSpacing: '0.2rem',
  textTransform: 'uppercase',
  margin: 0,
  fontWeight: 500
}

const textCenter = {
  textAlign: 'center'
}

const saveButton = {
  background: 'transparent',
  color: '#FFF',
  textDecoration: 'none',
  border: '1px solid #28F',
  padding: '6px 8px 6px 12px',
  cursor: 'pointer',
  fontWeight: 500
}

Play.defaultProps = {
  newGame: false,
  size: 5,
  minutes: 5
}

export default Play;
