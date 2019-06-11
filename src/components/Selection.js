import React from 'react';
import Cell from './Cell';

class Selection extends React.Component {
  render() {
    let word = [];
    for (let i = 0; i < this.props.word.length; i++) {
      word[i] = <Cell key={i.toString()} letter={(this.props.word[i]) ? this.props.word[i] : ' '} />
    }
    return (
      <div>
        {word}
        <button id="submit">&#8629;</button>
      </div>
    );
  }
}

Selection.defaultProps = {
  word: 'TAPWORD'
}

export default Selection

