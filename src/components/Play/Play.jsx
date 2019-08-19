import React from 'react'
import Modal from './../Modal'

function Play({size, minutes, handleGridSizeClick, handleMinuteClick, startNewGame}) {
  const gridSizes = [];
  [3,4,5,6,7].forEach((x,i) => {
    if (x === size) {
      gridSizes[i] = <div key={i.toString()} className="grid-box grid-size selected" onClick={handleGridSizeClick}>{x}</div>
    } else {
      gridSizes[i] = <div key={i.toString()} className="grid-box grid-size" onClick={handleGridSizeClick}>{x}</div>
    }
  })

  const timerMinutes = [];
  [0,1,2,3,4,5,6,7,8,9,10].forEach((x,i) => {
    if (x === minutes) {
      timerMinutes[i] = <div key={i.toString()} className="grid-box grid-minute selected" onClick={handleMinuteClick}>{x}</div>
    } else {
      timerMinutes[i] = <div key={i.toString()} className="grid-box grid-minute" onClick={handleMinuteClick}>{x}</div>
    }
  })

  return (
    <Modal
      title={`NEW GAME`}
      id={`play`}
      footer={
        <div style={{ ...spacedTypo, ...textCenter }}>
          <button style={saveButton} onClick={startNewGame}>Start New Game</button>
        </div>
      }
      transparent={false}
      canClose={false}
    >
      <div>
        <h5 style={spacedTypo}>GRID SIZE</h5>
        <div>...</div>
        <div>&nbsp;</div>
        <div className="grid-box-container" data-size={size}>
          {gridSizes}
        </div>
      </div>
      <br />
      <br />
      <div>
        <h5 style={spacedTypo}>TIMER</h5>
        <div>...</div>
        <div>&nbsp;</div>
        <div className="grid-box-container" data-size={size}>
          {timerMinutes}
        </div>
        <div style={{ marginTop: '.4rem' }}><em><small>select 0 for endless mode</small></em></div>
      </div>
    </Modal>
  )
}

const spacedTypo = {
  letterSpacing: '0.1rem',
  wordSpacing: '0.2rem',
  textTransform: 'uppercase',
  margin: 0,
  fontWeight: 600
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
  fontWeight: 600
}

Play.defaultProps = {
  newGame: false,
  size: 5,
  minutes: 5
}

export default Play
