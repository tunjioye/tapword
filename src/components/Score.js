import React from 'react';
import Cell from './Cell';

class Score extends React.Component {
  render() {
    let output = [];
    let score = this.props.score.toString();
    for (let i = 0; i < score.length; i++) {
      output[i] = <Cell key={i.toString()} letter={(score[i]) ? score[i] : ' '} />
    }
    return (
      <div className="selection">
        <span className="selection-info">SCORE</span>
        <span id="score">{output}</span>
      </div>
    );
  }
}

Score.defaultProps = {
  score: 0
}

export default Score

