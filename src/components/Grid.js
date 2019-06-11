import React from 'react';
import Row from './Row';

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: props.size,
      rows: props.rows
    }
    this.randomLetters = this.randomLetters.bind(this)
  }
  randomLetters() {
    const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    let letters = []
    for (let i = 0; i < this.state.size; i++) {
      letters[i] = [...Array(parseInt(this.state.size))].map(x => chars[Math.random() * chars.length | 0]).join('')
    }
    return letters
  }
  componentDidMount() {
    if (this.props.generate) {
      this.setState({
        rows: this.randomLetters()
      })
    }
  }
  render() {
    let rows = []
    for (let i = 0; i < this.state.size; i++) {
      rows[i] = <Row key={i.toString()} size={this.state.size} letters={this.state.rows[i]} />
    }
    return (
      <div className="grid">
        {rows}
      </div>
    );
  }
}

Grid.defaultProps = {
  generate: true,
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
