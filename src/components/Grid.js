import React from 'react';
import Row from './Row';
import Score from './Score';
import Selection from './Selection';
import Sidebar from './Sidebar';
import spellcheck from './../spellcheck';

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: props.size,
      rows: props.rows,
      score: props.score,
      word: props.word,
      cellToggle: props.cellToggle
    }
    this.randomLetters = this.randomLetters.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
    this.pushSelectionWord = this.pushSelectionWord.bind(this)
    this.popSelectionWord = this.popSelectionWord.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.submitWord = this.submitWord.bind(this)
    this.addToScore = this.addToScore.bind(this)
    this.clearSelectionWord = this.clearSelectionWord.bind(this)
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
    if (this.state.cellToggle) {
      // cell toggle
      if (word.filter(x => x.cell === cellName).length === 0) {
        this.pushSelectionWord(cell)
      } else {
        word = word.filter(x => x.cell !== cellName)
        this.setState({
          word: word
        })
        cell.classList.toggle('selected')
      }
    } else {
      // word pop
      if (word.filter(x => x.cell === cellName).length === 0) {
        this.pushSelectionWord(cell)
      } else if (word[word.length - 1].cell === cellName) {
        this.popSelectionWord()
      }
    }
  }
  pushSelectionWord(cell) {
    let cellName = cell.getAttribute('cell')
    let word = this.state.word
    word[word.length] = {
      cell: cellName,
      letter: cell.innerHTML
    }
    cell.classList.add('selected')
    this.setState({
      word: word
    })
  }
  popSelectionWord() {
    if (this.state.word.length > 0) {
      let word = this.state.word
      document.querySelectorAll('[cell=' + word[word.length - 1].cell + ']')[0].classList.remove('selected');
      word.length--;
      this.setState({
        word: word
      })
    }
  }
  clearSelectionWord() {
    this.setState({
      word: []
    })
  }
  submitWord() {
    let word = this.state.word.map(x => x.letter).join('').toLowerCase();
    console.log(word)
    spellcheck.get('?text=' + word)
    .then(function (response) {
      console.log(response.data)
      if (response.data.corrections[word] === undefined) {
        this.addToScore(word.length)
        this.clearSelectionWord()
      } else {
        alert(word.toUpperCase() + ' REJECTED')
      }
    }.bind(this))
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      // always executed
    });
  }
  addToScore(number) {
    let score = this.state.score
    score += number
    this.setState({
      score: score
    })
  }
  handleKeyUp(e) {
    switch (e.keyCode) {
      // backspace key to undo
      case 8:
        e.preventDefault()
        this.popSelectionWord()
        break;
      // return or enter key to submit
      case 13:
        e.preventDefault()
        console.log('Return button was pressed')
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp)
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
        <Score score={this.state.score} />
        <Selection word={this.state.word.map(x => x.letter)} />
        <div className="rows">
          {rows}
        </div>
        <Sidebar handleUndoButtonClick={this.popSelectionWord} handleSubmitButtonClick={this.submitWord} />
      </div>
    );
  }
}

Grid.defaultProps = {
  generate: true,
  cellToggle: false,
  size: 5,
  rows: [
    'TAP',
    'WORD',
    'GAME',
    'BY',
    'TUNJI',
  ],
  score: 0,
  word: [] // { cell: '', letter: ''} cell is short for cellName
}

export default Grid;
