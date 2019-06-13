import React from 'react';

class Cell extends React.Component {
  handleClick(e) {
    let cell = e.target
    console.log(cell.innerHTML)
    cell.classList.toggle('selected')
  }
  render() {
    return (
      <div
        className={(this.props.className) ? "cell " + this.props.className : "cell"}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.letter.charAt(0)}
      </div>
    );
  }
}

Cell.defaultProps = {
  letter: ''
}

export default Cell
