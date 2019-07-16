import React from 'react';

class CellNew extends React.Component {
  render() {
    return (
      <div
        className={(this.props.className) ? "cell-new " + this.props.className : "cell-new"}
        cell={this.props.cellName}
        onClick={this.props.handleCellClick}
      >
        {this.props.letter.charAt(0)}
      </div>
    );
  }
}

CellNew.defaultProps = {
  letter: 'T'
}

export default CellNew
