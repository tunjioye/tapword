import React from 'react';

class Sidebar extends React.Component {
  openPlayModal() {
    window.location.hash = 'play';
  }
  openPlayerModal() {
    window.location.hash = 'player';
  }
  openHelpModal() {
    window.location.hash = 'help';
  }
  render() {
    let timer = <div className="timer">{this.props.minutes}<span className="highlight">m</span></div>;
    if (this.props.minutes === 0) {
      timer = <div className="timer">&infin;</div>;
    }

    let playOrQuitText = "New Game"
    let playOrQuitAction = this.openPlayModal.bind(this)
    let playOrQuit = <div>&#8227;</div>;
    if (this.props.newGame) {
      playOrQuitText = "Quit"
      playOrQuitAction = this.props.quitGame
      playOrQuit = <div>&times;</div>;
    }

    return (
      <div className="grid-sidebar">
        <div className="grid-gameplay sidebar-inner sidebar-inner-gameplay">
          <div className="cell-new tooltip button alt" data-tooltip="Score Multiplier">
            <div className="multiplier"><span className="highlight">x</span><span>{this.props.multiplier}</span></div>
          </div>
          <div className="cell-new tooltip button alt" data-tooltip="Timer">
            {timer}
          </div>
          <div className="cell-new tooltip button alt" data-tooltip="Grid Size">
            <div className="grid-size">&#8862;<sub className="highlight">{this.props.size}</sub></div>
          </div>
          <div className="cell-new"></div>
          <div className="cell-new"></div>
        </div>
        <div className="grid-actions sidebar-inner sidebar-inner-actions">
          <div className="cell-new tooltip button alt" data-tooltip="Player" onClick={this.openPlayerModal.bind(this)}>
            <div>&#10033;</div>
          </div>
          <div className="cell-new tooltip button alt" data-tooltip="Help" onClick={this.openHelpModal.bind(this)}>
            <div>&#63;</div>
          </div>
          <div className="cell-new tooltip button alt" data-tooltip={playOrQuitText} onClick={playOrQuitAction}>
            {playOrQuit}
          </div>
          <div className="cell-new tooltip button alt" data-tooltip="Undo Word" onClick={this.props.handleUndoButtonClick}>
            <div>&#8592;</div>
          </div>
          <div className="cell-new tooltip button alt" data-tooltip="Submit Word" onClick={this.props.handleSubmitButtonClick}>
            <div>&#8629;</div>
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
