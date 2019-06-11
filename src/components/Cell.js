import React from 'react';

class Cell extends React.Component {
  render() {
    return (
      <div className="cell">{this.props.letter.charAt(0)}</div>
    );
  }
}

Cell.defaultProps = {
  letter: 'T'
}

export default Cell
