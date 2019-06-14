import React from 'react';

class Sidebar extends React.Component {
  render() {
    let timer;
    if (this.props.endless) {
      timer = <div className="button alt">&infin;</div>;
    } else {
      timer = <div className="button alt">{this.props.minutes}<span className="highlight">m</span></div>;
    }
    return (
      <div className="sidebar">
        <div className="cell">
          <div className="button alt"><span className="highlight">x</span><span id="multiplier">{this.props.multiplier}</span></div>
        </div>
        <div className="cell">
          {timer}
        </div>
        <div className="cell">
          <div className="button alt">&#8862;<sub className="highlight">{this.props.size}</sub></div>
        </div>
        <div className="cell">
          <button id="undo" className="button" onClick={this.props.handleUndoButtonClick}>&#8630;</button>
        </div>
        <div className="cell">
          <button id="submi" className="button">&#8629;</button>
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
