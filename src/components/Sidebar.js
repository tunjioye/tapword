import React from 'react';

class Sidebar extends React.Component {
  openSettingsModal() {
    window.location.hash = 'settings';
  }
  openHelpModal() {
    window.location.hash = 'help';
  }
  handleQuit() {
    alert('QUITING IS NOT A OPTION!');
  }
  render() {
    let timer;
    if (this.props.endless) {
      timer = <div className="button alt">&infin;</div>;
    } else {
      timer = <div className="button alt">{this.props.minutes}<span className="highlight">m</span></div>;
    }
    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="cell tooltip" data-tooltip="Score Multiplier">
            <div className="button alt"><span className="highlight">x</span><span id="multiplier">{this.props.multiplier}</span></div>
          </div>
          <div className="cell tooltip" data-tooltip="Timer">
            {timer}
          </div>
          <div className="cell tooltip" data-tooltip="Grid Size">
            <div className="button alt">&#8862;<sub className="highlight">{this.props.size}</sub></div>
          </div>
          <div className="cell tooltip" data-tooltip="Undo Word">
            <button id="undo" className="button" onClick={this.props.handleUndoButtonClick}>&#8630;</button>
          </div>
          <div className="cell tooltip" data-tooltip="Submit Word">
            <button id="submit" className="button" onClick={this.props.handleSubmitButtonClick}>&#8629;</button>
          </div>
        </div>
        <div className="sidebar-inner">
          <div className="cell tooltip" data-tooltip="Settings">
            <div className="button alt" onClick={this.openSettingsModal.bind(this)}>&#10033;</div>
          </div>
          <div className="cell tooltip" data-tooltip="Help">
            <div className="button alt" onClick={this.openHelpModal.bind(this)}>&#63;</div>
          </div>
          <div className="cell tooltip" data-tooltip="Quit">
            <button id="quit" className="button" onClick={this.handleQuit.bind(this)}>&times;</button>
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
  endless: false
}

export default Sidebar;
