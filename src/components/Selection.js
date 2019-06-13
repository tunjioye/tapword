import React from 'react';
import Cell from './Cell';

class Selection extends React.Component {
  render() {
    let output = [];
    for (let i = 0; i < this.props.word.length; i++) {
      output[i] = <Cell key={i.toString()} letter={(this.props.word[i]) ? this.props.word[i] : ' '} />
    }
    return (
      <div className="selection">
        <span className="selection-info">WORD INPUT</span>
        <span id="word">{output}</span>
      </div>
    );
  }
}

Selection.defaultProps = {
  word: ''
}

export default Selection

