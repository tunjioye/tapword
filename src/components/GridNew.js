import React from 'react';
import RowNew from './RowNew';

class GridNew extends React.Component {
  render() {
    let rows = []
    for (let i = 0; i < this.props.size; i++) {
      rows[i] = <RowNew
        key={i.toString()}
        rowNumber={i}
        size={this.props.size}
        letters={this.props.rows[i]}
        handleCellClick={this.props.handleCellClick} />
    }
    return (
      <div className="grid-new">
        {rows}
      </div>
    );
  }
}

GridNew.defaultProps = {
  size: 5,
  rows: [
    'TAP',
    'WORD',
    'GAME',
    'BY',
    'TUNJI',
  ]
}

export default GridNew;
