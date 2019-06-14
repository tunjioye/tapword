import React from 'react';
import Row from './Row';
import Score from './Score';
import Selection from './Selection';
import Sidebar from './Sidebar';

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: props.size,
      rows: props.rows,
      word: props.word
    }
    this.randomLetters = this.randomLetters.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
  }
  randomLetters() {
    const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    let letters = []
    for (let i = 0; i < this.state.size; i++) {
      letters[i] = [...Array(parseInt(this.state.size))].map(x => chars[Math.random() * chars.length | 0]).join('')
    }
    return letters
  }
  handleCellClick(e) {
    let cell = e.target
    let cellName = cell.getAttribute('cell')
    let word = this.state.word
    if (word.filter(x => x.cell === cellName).length === 0) {
      word[word.length] = {
        cell: cellName,
        letter: cell.innerHTML
      }
      this.setState({
        word: word
      })
      cell.classList.toggle('selected')
    }
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
      rows[i] = <Row
        key={i.toString()}
        rowNumber={i}
        size={this.state.size}
        letters={this.state.rows[i]}
        onClick={this.handleCellClick} />
    }
    return (
      <div className="grid">
        <Score />
        <Selection word={this.state.word.map(x => x.letter)} />
        <div className="rows">
          {rows}
        </div>
        <Sidebar />
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
  ],
  word: []
}

export default Grid;
