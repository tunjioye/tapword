import React from 'react';
import Cell from './Cell';

class Row extends React.Component {
  render() {
    let rowLetters = [];
    for (let i = 0; i < this.props.size; i++) {
      rowLetters[i] = <Cell
        key={i.toString()}
        cellName={'c' + ((this.props.rowNumber * this.props.size) + i)}
        letter={(this.props.letters[i]) ? this.props.letters[i] : ' '}
        onClick={this.props.onClick} />
    }
    return (
      <div className={(this.props.className) ? "row " + this.props.className : "row"}>
        {rowLetters}
        {/* <br /> */}
      </div>
    );
  }
}

Row.defaultProps = {
  size: 5,
  letters: 'TAPWD'
}

export default Row;
