import React from 'react';
import CellNew from './CellNew';

class RowNew extends React.Component {
  render() {
    let rowLetters = [];
    for (let i = 0; i < this.props.size; i++) {
      rowLetters[i] = <CellNew
        key={i.toString()}
        cellName={'c' + ((this.props.rowNumber * this.props.size) + i)}
        letter={(this.props.letters[i]) ? this.props.letters[i] : ' '}
        handleCellClick={this.props.handleCellClick} />
    }
    return (
      <>
        {rowLetters}
      </>
    );
  }
}

RowNew.defaultProps = {
  size: 5,
  letters: 'TAPWD'
}

export default RowNew;
