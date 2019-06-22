import React from 'react';

class Sidebar extends React.Component {
  openPlayModal() {
    window.location.hash = 'play';
  }
  openSettingsModal() {
    window.location.hash = 'settings';
  }
  openHelpModal() {
    window.location.hash = 'help';
  }
  render() {
    let timer;
    if (this.props.minutes === 0) {
      timer = <div className="button alt">&infin;</div>;
    } else {
      timer = <div className="button alt">{this.props.minutes}<span className="highlight">m</span></div>;
    }
    let playOrQuit;
    let playOrQuitText;
    if (this.props.newGame) {
      playOrQuitText = "Quit"
      playOrQuit = <div className="button alt" onClick={this.props.quitGame}>&times;</div>;
    } else {
      playOrQuitText = "New Game"
      playOrQuit = <div className="button alt" onClick={this.openPlayModal.bind(this)}>&#8227;</div>;
    }
    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="cell tooltip" data-tooltip="Score Multiplier">
            <div className="button alt multiplier"><span className="highlight">x</span><span>{this.props.multiplier}</span></div>
          </div>
          <div className="cell tooltip" data-tooltip="Timer">
            {timer}
          </div>
          <div className="cell tooltip" data-tooltip="Grid Size">
            <div className="button alt">&#8862;<sub className="highlight">{this.props.size}</sub></div>
          </div>
        </div>
        <div className="sidebar-inner">
          <div className="cell tooltip" data-tooltip="Settings">
            <div className="button alt" onClick={this.openSettingsModal.bind(this)}>&#10033;</div>
          </div>
          <div className="cell tooltip" data-tooltip="Help">
            <div className="button alt" onClick={this.openHelpModal.bind(this)}>&#63;</div>
          </div>
          <div className="cell tooltip" data-tooltip={playOrQuitText}>
            {playOrQuit}
          </div>
          <div className="cell tooltip" data-tooltip="Undo Word">
            <div className="button alt" onClick={this.props.handleUndoButtonClick}>&#8630;</div>
          </div>
          <div className="cell tooltip" data-tooltip="Submit Word">
            <div className="button alt" onClick={this.props.handleSubmitButtonClick}>&#8629;</div>
          </div>
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  size: 5,
  minutes: 5,
  multiplier: 1,
  newGame: false
}

export default Sidebar;
