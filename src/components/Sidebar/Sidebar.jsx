import React from 'react'
import PropTypes from 'prop-types'
// import './Sidebar.scss'
import Countdown from './../Countdown'
import Popover from './../Popover'

class Sidebar extends React.Component {
  openPlayModal() {
    window.location.hash = ''
    window.location.hash = 'play'
    // set App Minutes
    this.props.setTimeMinutes(parseInt(this.props.minutes))
    // For Tutorial
    if (this.props.clickThis && this.props.clickThis === "play") {
      this.props.nextTutorialStep()
    }
  }

  openPlayerModal() {
    window.location.hash = ''
    window.location.hash = 'player'
  }

  openHelpModal() {
    window.location.hash = ''
    window.location.hash = 'help'
  }

  render() {
    let timerText = "Timer"
    // let timer = (<div className="timer">{this.props.minutes}<span className="highlight">m</span></div>)
    let timer = (
      <div className="timer">
        <Countdown
          minutes={parseFloat(this.props.minutes)}
          newGame={this.props.newGame}
          setTimeMinutes={this.props.setTimeMinutes}
          saveGameProgress={this.props.saveGameProgress}
          quitGame={this.props.quitGame} />
        {/* <span className="highlight">m</span> */}
      </div>
    )
    if (this.props.minutes === 0) {
      timerText = "Endless"
      timer = (<div className="timer">&infin;</div>)
    }

    let playOrQuitText = "New Game"
    let playOrQuitAction = this.openPlayModal.bind(this)
    let playOrQuit = (<div>&#8227;</div>)
    if (this.props.newGame) {
      playOrQuitText = "Quit"
      playOrQuitAction = this.props.quitGame
      playOrQuit = (<div>&times;</div>)
    }

    return (
      <div className="grid-sidebar">
        <div className="grid-gameplay sidebar-inner sidebar-inner-gameplay">
          <div className="grid-cell tooltip button alt" data-tooltip="Score Multiplier">
            <div className="multiplier"><span className="highlight">x</span><span>{this.props.multiplier}</span></div>
          </div>
          <div className="grid-cell tooltip button alt" data-tooltip={timerText}>
            {timer}
          </div>
          <div className="grid-cell tooltip button alt" data-tooltip="Grid Size">
            <div className="grid-size">&#8862;<sub className="highlight">{this.props.size}</sub></div>
          </div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
        </div>
        <div className="grid-actions sidebar-inner sidebar-inner-actions">
          <div className="grid-cell tooltip button alt" data-tooltip="Player" onClick={this.openPlayerModal.bind(this)}>
            <div>&#10033;</div>
          </div>
          <div className="grid-cell tooltip button alt" data-tooltip="Help" onClick={this.openHelpModal.bind(this)}>
            <div>&#63;</div>
          </div>
          <div className="grid-cell tooltip button alt" data-tooltip={playOrQuitText} onClick={playOrQuitAction}>
            {this.props.clickThis === "play" || this.props.clickThis === "quit"
              ? (
                <Popover className="click-this">
                  { playOrQuit }
                </Popover>
              )
              : playOrQuit
            }
          </div>
          <div className="grid-cell tooltip button alt" data-tooltip="Undo Word" onClick={this.props.handleUndoButtonClick}>
            <div>&#8592;</div>
          </div>
          <div className="grid-cell tooltip button alt" data-tooltip="Submit Word" onClick={this.props.handleSubmitButtonClick}>
            {this.props.clickThis === "submit"
              ? (
                <Popover className="click-this">
                  <div>&#8629;</div>
                </Popover>
              )
              : <div>&#8629;</div>
            }
          </div>
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  size: PropTypes.number,
  minutes: PropTypes.number,
  multiplier: PropTypes.number,
  newGame: PropTypes.bool,
  setTimeMinutes: PropTypes.func,
  saveGameProgress: PropTypes.func,
  quitGame: PropTypes.func,
  handleUndoButtonClick: PropTypes.func,
  handleSubmitButtonClick: PropTypes.func,
  nextTutorialStep: PropTypes.func
}

Sidebar.defaultProps = {
  size: 5,
  minutes: 5,
  multiplier: 1,
  newGame: false
}

export default Sidebar
