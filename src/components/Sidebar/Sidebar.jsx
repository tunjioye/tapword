import React from 'react'
import PropTypes from 'prop-types'
import Countdown from './../Countdown'
import Popover from './../Popover'

const Sidebar = ({
  clickThis = () => null,
  nextTutorialStep = () => null,
  multiplier,
  size,
  minutes,
  newGame,
  setMinutes = () => null,
  saveGameProgress = () => null,
  quitGame = () => null,
  handleUndoButtonClick = () => null,
  handleSubmitButtonClick = () => null,
}) => {
  const openPlayModal = () => {
    window.location.hash = ''
    window.location.hash = 'play'
    // set App Minutes
    setMinutes(parseInt(minutes))
    // For Tutorial
    if (clickThis && clickThis === 'play') {
      nextTutorialStep()
    }
  }
  const openPlayerModal = () => {
    window.location.hash = ''
    window.location.hash = 'player'
  }
  const openHelpModal = () => {
    window.location.hash = ''
    window.location.hash = 'help'
  }

  let timerText = 'Timer'
  let timer = (
    <div className="timer">
      <Countdown
        minutes={parseFloat(minutes)}
        newGame={newGame}
        setMinutes={setMinutes}
        saveGameProgress={saveGameProgress}
        quitGame={quitGame}
      />
    </div>
  )
  if (minutes === 0) {
    timerText = 'Endless'
    timer = <div className="timer">&infin;</div>
  }

  let playOrQuitText = 'New Game'
  let playOrQuitAction = openPlayModal
  let playOrQuit = <div>&#8227;</div>
  if (newGame) {
    playOrQuitText = 'Quit'
    playOrQuitAction = quitGame
    playOrQuit = <div>&times;</div>
  }

  return (
    <div className="grid-sidebar">
      <div className="grid-gameplay sidebar-inner sidebar-inner-gameplay">
        <div className="grid-cell tooltip button alt" data-tooltip="Score Multiplier">
          <div className="multiplier">
            <span className="highlight">x</span>
            <span>{multiplier}</span>
          </div>
        </div>
        <div className="grid-cell tooltip button alt" data-tooltip={timerText}>
          {timer}
        </div>
        <div className="grid-cell tooltip button alt" data-tooltip="Grid Size">
          <div className="grid-size">
            &#8862;<sub className="highlight">{size}</sub>
          </div>
        </div>
        <div className="grid-cell"></div>
        <div className="grid-cell"></div>
      </div>
      <div className="grid-actions sidebar-inner sidebar-inner-actions">
        <div className="grid-cell tooltip button alt" data-tooltip="Player" onClick={openPlayerModal}>
          <div>&#10033;</div>
        </div>
        <div className="grid-cell tooltip button alt" data-tooltip="Help" onClick={openHelpModal}>
          <div>&#63;</div>
        </div>
        <div className="grid-cell tooltip button alt" data-tooltip={playOrQuitText} onClick={playOrQuitAction}>
          {clickThis === 'play' || clickThis === 'quit' ? (
            <Popover className="click-this">{playOrQuit}</Popover>
          ) : (
            playOrQuit
          )}
        </div>
        <div className="grid-cell tooltip button alt" data-tooltip="Undo Word" onClick={handleUndoButtonClick}>
          <div>&#8592;</div>
        </div>
        <div className="grid-cell tooltip button alt" data-tooltip="Submit Word" onClick={handleSubmitButtonClick}>
          {clickThis === 'submit' ? (
            <Popover className="click-this">
              <div>&#8629;</div>
            </Popover>
          ) : (
            <div>&#8629;</div>
          )}
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  size: PropTypes.number,
  minutes: PropTypes.number,
  multiplier: PropTypes.number,
  newGame: PropTypes.bool,
  setMinutes: PropTypes.func,
  saveGameProgress: PropTypes.func,
  quitGame: PropTypes.func,
  handleUndoButtonClick: PropTypes.func,
  handleSubmitButtonClick: PropTypes.func,
  nextTutorialStep: PropTypes.func,
}

Sidebar.defaultProps = {
  size: 5,
  minutes: 5,
  multiplier: 1,
  newGame: false,
}

export default Sidebar
