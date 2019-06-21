import React from 'react';

class Cell extends React.Component {
  render() {
    return (
      <div
        className={(this.props.className) ? "cell " + this.props.className : "cell"}
        cell={this.props.cellName}
        onClick={this.props.handleCellClick}
      >
        {this.props.letter.charAt(0)}
      </div>
    );
  }
}

Cell.defaultProps = {
  letter: 'T'
}

export default Cell
