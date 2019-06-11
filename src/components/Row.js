import React from 'react';
import Cell from './Cell';

class Row extends React.Component {
  render() {
    let rowLetters = [];
    for (let i = 0; i < this.props.size; i++) {
      rowLetters[i] = <Cell key={i.toString()} letter={(this.props.letters[i]) ? this.props.letters[i] : ' '} />
    }
    return (
      <div class="row">
        {rowLetters}
        <br />
      </div>
    );
  }
}

Row.defaultProps = {
  size: 5,
  letters: 'TAPWD'
}

export default Row;
