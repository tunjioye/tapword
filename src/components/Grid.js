import React from 'react';
import Row from './Row';

class Grid extends React.Component {
  render() {
    let rows = []
    for (let i = 0; i < this.props.size; i++) {
      rows[i] = <Row
        key={i.toString()}
        rowNumber={i}
        size={this.props.size}
        letters={this.props.rows[i]}
        handleCellClick={this.props.handleCellClick} />
    }
    return (
      <div className="grid">
        <div className="rows">
          {rows}
        </div>
      </div>
    );
  }
}

Grid.defaultProps = {
  size: 5,
  rows: [
    'TAP',
    'WORD',
    'GAME',
    'BY',
    'TUNJI',
  ]
}

export default Grid;
