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
      multiplier: props.multiplier,
      endless: props.endless,
      score: props.score,
      lastWordScore: props.lastWordScore,
      word: props.word,
      cellToggle: props.cellToggle,
      shuffle: props.shuffle,
      shuffleAll: props.shuffleAll
    }
    this.randomLetters = this.randomLetters.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
    this.pushSelectionWord = this.pushSelectionWord.bind(this)
    this.popSelectionWord = this.popSelectionWord.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.submitWord = this.submitWord.bind(this)
    this.updateMultiplier = this.updateMultiplier.bind(this)
    this.updateScore = this.updateScore.bind(this)
    this.clearSelectionWord = this.clearSelectionWord.bind(this)
    this.resetSelectedCells = this.resetSelectedCells.bind(this)
    this.shuffleCells = this.shuffleCells.bind(this)
  }
  randomLetters() {
    const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    let letters = []
    for (let i = 0; i < this.state.size; i++) {
      letters[i] = [...Array(parseInt(this.state.size))].map(x => chars[Math.floor(Math.random() * chars.length) | 0]).join('')
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
      document.querySelectorAll('[cell=' + word[word.length - 1].cell + ']')[0].classList.remove('selected')
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
  updateMultiplier(newWordScore) {
    if (this.state.lastWordScore > 1) {
      let lastWordScore = this.state.lastWordScore
      let multiplier = this.state.multiplier
      if (newWordScore > lastWordScore) {
        multiplier++
      } else if (newWordScore < lastWordScore && this.state.multiplier > 1) {
        multiplier--
      }
      this.setState({
        multiplier: multiplier
      })
    }
  }
  updateScore(wordScore) {
    let score = this.state.score
    score += (wordScore * this.state.multiplier)
    this.updateMultiplier(wordScore)
    this.setState({
      score: score,
      lastWordScore: wordScore
    })
  }
  resetSelectedCells() {
    let selectedCells = document.querySelectorAll('[class="cell selected"]')
    selectedCells.forEach(x => x.classList.remove('selected'))
    this.shuffleCells(selectedCells)
  }
  shuffleCells(selectedCells) {
    if (this.state.shuffle) {
      if (this.state.shuffleAll) {
        // shuffle all cells
        this.setState({
          rows: this.randomLetters()
        })
      } else {
        // shuffle only selected cells
        const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
        selectedCells.forEach(x => x.innerHTML = chars[Math.floor(Math.random() * chars.length) | 0])
      }
    }
  }
  submitWord() {
    let word = this.state.word.map(x => x.letter).join('').toLowerCase();
    spellcheck.get('?text=' + word)
    .then(function (response) {
      if (response.data.corrections[word] === undefined) {
        this.updateScore(word.length)
        this.clearSelectionWord()
        this.resetSelectedCells()
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
        <Sidebar multiplier={this.state.multiplier} endless={this.state.endless} handleUndoButtonClick={this.popSelectionWord} handleSubmitButtonClick={this.submitWord} />
      </div>
    );
  }
}

Grid.defaultProps = {
  generate: true,
  cellToggle: false,
  shuffle: true,
  shuffleAll: true,
  size: 5,
  rows: [
    'TAP',
    'WORD',
    'GAME',
    'BY',
    'TUNJI',
  ],
  multiplier: 1,
  endless: false,
  score: 0,
  lastWordScore: 0,
  word: [] // { cell: '', letter: ''} cell is short for cellName
}

export default Grid;
