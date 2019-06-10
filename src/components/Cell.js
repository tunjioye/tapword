import React from 'react'

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      letter: props.letter
    }
  }
  render() {
    return (
      <div>{this.state.letter}</div>
    )
  }
}

Cell.defaultProps = {
  letter: 'T'
}

export default Cell
