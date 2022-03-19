// import React, { useState, useEffect } from 'react'
// import spellcheck from './spellcheck'
// import Loading from './components/Loading'
// // import Topbar from './components/Topbar';
// import GridNew from './components/GridNew'
// // import Grid from './components/Grid';
// import Score from './components/Score'
// import Selection from './components/Selection'
// import Sidebar from './components/Sidebar'
// import Play from './components/Play'
// import Player from './components/Player'
// import Help from './components/Help'
// function Tutorial() {
//   // const [tutorial, setTutorial] = useState(props.tutorial)
//   const [tutorialSteps, setTutorialSteps] = useState(props.tutorialSteps)
//   const [currentStep, setCurrentStep] = useState(props.currentStep)
//   const [newGame, setNewGame] = useState(props.newGame)
//   const [size, setSize] = useState(props.size)
//   const [minutes, setMinutes] = useState(props.minutes)
//   const [rows, setRows] = useState(props.rows)
//   const [multiplier, setMultiplier] = useState(props.multiplier)
//   const [score, setScore] = useState(props.score)
//   const [lastWordLength, setLastWordLength] = useState(props.lastWordLength)
//   const [word, setWord] = useState(props.word)
//   const [cellToggle, setCellToggle] = useState(props.cellToggle)
//   const [shuffle, setShuffle] = useState(props.shuffle)
//   const [shuffleAll, setShuffleAll] = useState(props.shuffleAll)

//   const startNewGame = () => {
//     // For Tutorial : prevent unexpected game state for new game
//     if (size === 5 && minutes === 0) {
//       // Default
//       setNewGame(true)
//       setMultiplier(1)
//       setScore(0)
//       setLastWordLength(0)
//       setWord([])

//       resetSelectedCells()
//       window.location.hash = ''
//       saveGameProgress('save')
//       // EndDefault
//       nextTutorialStep()
//     } else {
//       setCurrentStep(1)
//     }
//   }

//   const quitGame = (quitMessage = ' ') => {
//     if (typeof quitMessage === 'string' && quitMessage !== '') {
//       window.alert(`${quitMessage} \r\nYour Score is : ${score}`)
//     } else {
//       window.alert(`Your Score is : ${score}`)
//     }
//     setNewGame(false)
//     if (window.localStorage.getItem('game')) window.localStorage.removeItem('game')
//     // For Tutorial : end Tutorial
//     window.localStorage.setItem('tw_quicktutorial', 'done')
//     window.alert(`Thanks for taking our Quick Tutorial`)
//     props.endTutorial()
//   }

//   const hasStartedNewGame = () => {
//     return newGame ? true : false
//   }

//   const setTimeMinutes = (minutes) => {
//     setMinutes()
//   }

//   const randomLetters = () => {
//     const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
//     let letters = []
//     for (let i = 0; i < size; i++) {
//       letters[i] = [...Array(parseInt(size))].map((x) => chars[Math.floor(Math.random() * chars.length) | 0]).join('')
//     }
//     return letters
//   }

//   const handleCellClick = (e) => {
//     if (hasStartedNewGame()) {
//       // For Tutorial : prevent unexpected cell click
//       switch (`c${tutorialSteps[currentStep]}`) {
//         case e.target.getAttribute('cell'):
//           nextTutorialStep()
//           break
//         default:
//           return
//       }
//       // Default
//       saveGameProgress('loading')
//       let cell = e.target
//       let cellName = cell.getAttribute('cell')
//       let word = word
//       if (cellToggle) {
//         // cell toggle
//         if (word.filter((x) => x.cell === cellName).length === 0) {
//           pushSelectionWord(cell)
//         } else {
//           toggleSelectionWord(e)
//         }
//       } else {
//         // word pop
//         if (word.filter((x) => x.cell === cellName).length === 0) {
//           pushSelectionWord(cell)
//         } else if (word[word.length - 1].cell === cellName) {
//           popSelectionWord()
//         }
//       }

//       saveGameProgress('save')
//       // EndDefault
//     }
//   }

//   const toggleSelectionWord = (e) => {
//     if (hasStartedNewGame()) {
//       saveGameProgress('loading')

//       let cell = e.target
//       let cellName = cell.getAttribute('cell')

//       word = word.filter((x) => x.cell !== cellName)
//       setWord()

//       saveGameProgress('save')
//     }
//   }

//   const pushSelectionWord = (cell) => {
//     let cellName = cell.getAttribute('cell')
//     word[word.length] = {
//       cell: cellName,
//       letter: cell.innerHTML,
//     }

//     setWord()
//   }

//   const popSelectionWord = () => {
//     if (hasStartedNewGame()) {
//       saveGameProgress('loading')

//       if (word.length > 0) {
//         word.length--
//         setWord()
//       }

//       saveGameProgress('save')
//     }
//   }

//   const clearSelectionWord = () => {
//     setWord([])
//   }

//   const updateMultiplier = (newWordLength) => {
//     if (lastWordLength > 1) {
//       let multiplierEl = document.getElementsByClassName('multiplier')[0]
//       if (newWordLength > lastWordLength) {
//         multiplierEl.classList.add('plus1')
//         setTimeout(() => {
//           multiplierEl.classList.remove('plus1')
//         }, 500)
//         multiplier++
//       } else if (newWordLength < lastWordLength && multiplier > 1) {
//         multiplierEl.classList.add('minus1')
//         setTimeout(() => {
//           multiplierEl.classList.remove('minus1')
//         }, 500)
//         multiplier--
//       }
//       setMultiplier()
//     }
//   }

//   const updateScore = (wordLength) => {
//     score += wordLength * multiplier
//     updateMultiplier(wordLength)
//     setScore(score)
//     setLastWordLength(wordLength)
//   }

//   const resetSelectedCells = () => {
//     let selectedCells = document.querySelectorAll('[class="grid-cell selected"]')
//     shuffleCells(selectedCells)
//   }

//   const shuffleCells = (selectedCells) => {
//     if (shuffle) {
//       if (shuffleAll) {
//         // shuffle all cells
//         setRows(randomLetters())
//       } else {
//         // shuffle only selected cells
//         const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
//         selectedCells.forEach((x) => (x.innerHTML = chars[Math.floor(Math.random() * chars.length) | 0]))
//       }
//     }
//   }

//   const submitWord = () => {
//     if (hasStartedNewGame()) {
//       if (word.length > 0) {
//         saveGameProgress('loading')

//         let word = word
//           .map((x) => x.letter)
//           .join('')
//           .toLowerCase()
//         spellcheck
//           .get('?text=' + word)
//           .then(
//             function (response) {
//               let selectedCells = document.querySelectorAll('[class="grid-cell selected"]')
//               if (response.data.corrections[word] === undefined) {
//                 selectedCells.forEach((x) => x.classList.add('flash-success'))
//                 setTimeout(() => {
//                   selectedCells.forEach((x) => x.classList.remove('flash-success'))
//                   updateScore(word.length)
//                   clearSelectionWord()
//                   resetSelectedCells()
//                   saveGameProgress('save')

//                   // For Tutorial : next Tutotial Step on Submit
//                   nextTutorialStep()
//                 }, 500)
//               } else {
//                 document.getElementById('selection-word').classList.add('shake')
//                 selectedCells.forEach((x) => x.classList.add('flash-error'))
//                 setTimeout(() => {
//                   document.getElementById('selection-word').classList.remove('shake')
//                   selectedCells.forEach((x) => x.classList.remove('flash-error'))
//                   saveGameProgress('save')
//                 }, 500)
//               }
//             }.bind(this)
//           )
//           .catch(
//             function (error) {
//               if (error) {
//                 let errorMessage = 'Network Error'
//                 if (error.response !== undefined) {
//                   errorMessage = error.response.data.message
//                 }
//                 console.error(errorMessage)
//                 alert(errorMessage)
//               }
//               saveGameProgress('save')
//             }.bind(this)
//           )
//       }
//     }
//   }

//   const saveGameProgress = (state) => {
//     const savingProgress = document.getElementById('saving-progress')
//     switch (state) {
//       case 'save':
//         // save game progress & hide saving progress indicator
//         setTimeout(() => {
//           window.localStorage.setItem('game', JSON.stringify(this.state))
//           savingProgress.classList.add('d-hide')
//         }, 500)
//         break
//       case 'loading':
//       default:
//         // show saving progress indicator
//         savingProgress.classList.remove('d-hide')
//         break
//     }
//   }

//   const handleGridSizeClick = (e) => {
//     const gridSize = parseInt(e.target.innerText)
//     setSize(gridSize)
//     setTimeout(() => {
//       setRows(randomLetters())

//       // dynamically set grid size style
//       const gridNews = document.getElementsByClassName('grid-new')
//       const gridContainers = document.getElementsByClassName('grid-container')
//       const gridSidebars = document.getElementsByClassName('grid-sidebar')

//       gridNews[0].setAttribute('size', gridSize)
//       gridContainers[0].setAttribute('size', gridSize)
//       gridSidebars[0].setAttribute('size', gridSize)
//     }, 10)
//   }

//   const handleMinuteClick = (e) => {
//     setMinutes(parseInt(e.target.innerText))
//     // For Tutorial : goto next Tutorial Step only for expected minute click
//     if (tutorialSteps[currentStep] === 'endless' && e.target.innerText === '0') nextTutorialStep()
//   }

//   // For Tutorial : next tutorial Step Function
//   const nextTutorialStep = () => {
//     setCurrentStep(currentStep + 1)
//   }

//   const handleKeyUp = (e) => {
//     switch (e.keyCode) {
//       // backspace | del key to undo
//       case 8:
//       case 46:
//         e.preventDefault()
//         popSelectionWord()
//         break
//       // return or enter | spacebar key to submit
//       case 13:
//       case 32:
//         e.preventDefault()
//         submitWord()
//         break
//       default:
//         break
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('keyup', handleKeyUp)
//     if (props.generate) {setRows(randomLetters())}
//   }, [])



//   const wordCells = word.map((x) => x.cell)

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <div style={{ display: 'block' }}>
//             <Topbar />
//           </div> */}
//         <div id="saving-progress" className="d-hide">
//           <Loading />
//         </div>
//         <div style={{ padding: '1rem' }}>
//           <div>
//             <div>
//               <Score score={score} />
//             </div>
//             <div>
//               <Selection word={word.map((x) => x.letter)} />
//             </div>
//           </div>

//           <div style={{ minHeight: '8px', maxHeight: '8px' }}>&nbsp;</div>

//           <div className="grid-flex">
//             <GridNew clickThis={tutorialSteps[currentStep]} wordCells={wordCells} handleCellClick={handleCellClick} />
//             <Sidebar
//               clickThis={tutorialSteps[currentStep]}
//               nextTutorialStep={nextTutorialStep}
//               multiplier={multiplier}
//               size={size}
//               minutes={parseFloat(minutes)}
//               newGame={newGame}
//               setTimeMinutes={setTimeMinutes}
//               saveGameProgress={saveGameProgress}
//               quitGame={quitGame}
//               handleUndoButtonClick={popSelectionWord}
//               handleSubmitButtonClick={submitWord}
//             />
//           </div>
//         </div>
//       </header>
//       {!newGame && (
//         <Play
//           clickThis={tutorialSteps[currentStep]}
//           newGame={newGame}
//           startNewGame={startNewGame}
//           size={size}
//           minutes={minutes}
//           handleGridSizeClick={handleGridSizeClick}
//           handleMinuteClick={handleMinuteClick}
//         />
//       )}
//       <Player />
//       <Help />
//     </div>
//   )
// }

// Tutorial.defaultProps = {
//   // tutorial: true,
//   tutorialSteps: ['play', 'endless', 'start', 15, 13, 'submit', 16, 11, 7, 8, 'submit', 'quit'],
//   currentStep: 0,
//   newGame: false,
//   generate: true,
//   cellToggle: true,
//   shuffle: true,
//   shuffleAll: true,
//   size: 5,
//   minutes: 5,
//   rows: [],
//   multiplier: 1,
//   score: 0,
//   lastWordLength: 0,
//   word: [], // { cell: '', letter: ''} cell is short for cellName
// }

// export default Tutorial

import React from 'react'
import spellcheck from './spellcheck'
import Loading from './components/Loading'
// import Topbar from './components/Topbar';
import GridNew from './components/GridNew'
// import Grid from './components/Grid';
import Score from './components/Score'
import Selection from './components/Selection'
import Sidebar from './components/Sidebar'
import Play from './components/Play'
import Player from './components/Player'
import Help from './components/Help'

class Tutorial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // tutorial: props.tutorial,
      tutorialSteps: props.tutorialSteps,
      currentStep: props.currentStep,
      newGame: props.newGame,
      size: props.size,
      minutes: props.minutes,
      rows: props.rows,
      multiplier: props.multiplier,
      score: props.score,
      lastWordLength: props.lastWordLength,
      word: props.word,
      cellToggle: props.cellToggle,
      shuffle: props.shuffle,
      shuffleAll: props.shuffleAll,
    }
    this.startNewGame = this.startNewGame.bind(this)
    this.quitGame = this.quitGame.bind(this)
    this.hasStartedNewGame = this.hasStartedNewGame.bind(this)
    this.setMinutes = this.setMinutes.bind(this)
    this.randomLetters = this.randomLetters.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
    this.toggleSelectionWord = this.toggleSelectionWord.bind(this)
    this.pushSelectionWord = this.pushSelectionWord.bind(this)
    this.popSelectionWord = this.popSelectionWord.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.submitWord = this.submitWord.bind(this)
    this.updateMultiplier = this.updateMultiplier.bind(this)
    this.updateScore = this.updateScore.bind(this)
    this.clearSelectionWord = this.clearSelectionWord.bind(this)
    this.resetSelectedCells = this.resetSelectedCells.bind(this)
    this.shuffleCells = this.shuffleCells.bind(this)
    this.saveGameProgress = this.saveGameProgress.bind(this)
    this.handleGridSizeClick = this.handleGridSizeClick.bind(this)
    this.handleMinuteClick = this.handleMinuteClick.bind(this)
    // For Tutorial : next Tutorial Step Function
    this.nextTutorialStep = this.nextTutorialStep.bind(this)
  }
  startNewGame() {
    // For Tutorial : prevent unexpected game state for new game
    if (this.state.size === 5 && this.state.minutes === 0) {
      // Default
      this.setState({
        newGame: true,
        multiplier: 1,
        score: 0,
        lastWordLength: 0,
        word: [],
      })
      this.resetSelectedCells()
      window.location.hash = ''
      this.saveGameProgress('save')
      // EndDefault
      this.nextTutorialStep()
    } else {
      this.setState({
        currentStep: 1,
      })
    }
  }
  quitGame(quitMessage = ' ') {
    if (typeof quitMessage === 'string' && quitMessage !== '') {
      window.alert(`${quitMessage} \r\nYour Score is : ${this.state.score}`)
    } else {
      window.alert(`Your Score is : ${this.state.score}`)
    }
    this.setState({ newGame: false })
    if (window.localStorage.getItem('game')) window.localStorage.removeItem('game')
    // For Tutorial : end Tutorial
    window.localStorage.setItem('tw_quicktutorial', 'done')
    window.alert(`Thanks for taking our Quick Tutorial`)
    this.props.endTutorial()
  }
  hasStartedNewGame() {
    return this.state.newGame ? true : false
  }
  setMinutes(minutes) {
    this.setState({ minutes })
  }
  randomLetters() {
    const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    let letters = []
    for (let i = 0; i < this.state.size; i++) {
      letters[i] = [...Array(parseInt(this.state.size))]
        .map((x) => chars[Math.floor(Math.random() * chars.length) | 0])
        .join('')
    }
    return letters
  }
  handleCellClick(e) {
    if (this.hasStartedNewGame()) {
      // For Tutorial : prevent unexpected cell click
      const { tutorialSteps, currentStep } = this.state
      switch (`c${tutorialSteps[currentStep]}`) {
        case e.target.getAttribute('cell'):
          this.nextTutorialStep()
          break
        default:
          return
      }
      // Default
      this.saveGameProgress('loading')
      let cell = e.target
      let cellName = cell.getAttribute('cell')
      let word = this.state.word
      if (this.state.cellToggle) {
        // cell toggle
        if (word.filter((x) => x.cell === cellName).length === 0) {
          this.pushSelectionWord(cell)
        } else {
          this.toggleSelectionWord(e)
        }
      } else {
        // word pop
        if (word.filter((x) => x.cell === cellName).length === 0) {
          this.pushSelectionWord(cell)
        } else if (word[word.length - 1].cell === cellName) {
          this.popSelectionWord()
        }
      }

      this.saveGameProgress('save')
      // EndDefault
    }
  }
  toggleSelectionWord(e) {
    if (this.hasStartedNewGame()) {
      this.saveGameProgress('loading')

      let cell = e.target
      let cellName = cell.getAttribute('cell')
      let word = this.state.word

      word = word.filter((x) => x.cell !== cellName)
      this.setState({ word })

      this.saveGameProgress('save')
    }
  }
  pushSelectionWord(cell) {
    let cellName = cell.getAttribute('cell')
    let word = this.state.word
    word[word.length] = {
      cell: cellName,
      letter: cell.innerHTML,
    }

    this.setState({ word })
  }
  popSelectionWord() {
    if (this.hasStartedNewGame()) {
      this.saveGameProgress('loading')

      if (this.state.word.length > 0) {
        let word = this.state.word
        word.length--
        this.setState({ word })
      }

      this.saveGameProgress('save')
    }
  }
  clearSelectionWord() {
    this.setState({ word: [] })
  }
  updateMultiplier(newWordLength) {
    if (this.state.lastWordLength > 1) {
      let lastWordLength = this.state.lastWordLength
      let multiplier = this.state.multiplier
      let multiplierEl = document.getElementsByClassName('multiplier')[0]
      if (newWordLength > lastWordLength) {
        multiplierEl.classList.add('plus1')
        setTimeout(() => {
          multiplierEl.classList.remove('plus1')
        }, 500)
        multiplier++
      } else if (newWordLength < lastWordLength && this.state.multiplier > 1) {
        multiplierEl.classList.add('minus1')
        setTimeout(() => {
          multiplierEl.classList.remove('minus1')
        }, 500)
        multiplier--
      }
      this.setState({ multiplier })
    }
  }
  updateScore(wordLength) {
    let score = this.state.score
    score += wordLength * this.state.multiplier
    this.updateMultiplier(wordLength)
    this.setState({
      score: score,
      lastWordLength: wordLength,
    })
  }
  resetSelectedCells() {
    let selectedCells = document.querySelectorAll('[class="grid-cell selected"]')
    this.shuffleCells(selectedCells)
  }
  shuffleCells(selectedCells) {
    if (this.state.shuffle) {
      if (this.state.shuffleAll) {
        // shuffle all cells
        this.setState({ rows: this.randomLetters() })
      } else {
        // shuffle only selected cells
        const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
        selectedCells.forEach((x) => (x.innerHTML = chars[Math.floor(Math.random() * chars.length) | 0]))
      }
    }
  }
  submitWord() {
    if (this.hasStartedNewGame()) {
      if (this.state.word.length > 0) {
        this.saveGameProgress('loading')

        let word = this.state.word
          .map((x) => x.letter)
          .join('')
          .toLowerCase()
        spellcheck
          .get('?text=' + word)
          .then(
            function (response) {
              let selectedCells = document.querySelectorAll('[class="grid-cell selected"]')
              if (response.data.corrections[word] === undefined) {
                selectedCells.forEach((x) => x.classList.add('flash-success'))
                setTimeout(() => {
                  selectedCells.forEach((x) => x.classList.remove('flash-success'))
                  this.updateScore(word.length)
                  this.clearSelectionWord()
                  this.resetSelectedCells()
                  this.saveGameProgress('save')

                  // For Tutorial : next Tutotial Step on Submit
                  this.nextTutorialStep()
                }, 500)
              } else {
                document.getElementById('selection-word').classList.add('shake')
                selectedCells.forEach((x) => x.classList.add('flash-error'))
                setTimeout(() => {
                  document.getElementById('selection-word').classList.remove('shake')
                  selectedCells.forEach((x) => x.classList.remove('flash-error'))
                  this.saveGameProgress('save')
                }, 500)
              }
            }.bind(this)
          )
          .catch(
            function (error) {
              if (error) {
                let errorMessage = 'Network Error'
                if (error.response !== undefined) {
                  errorMessage = error.response.data.message
                }
                console.error(errorMessage)
                alert(errorMessage)
              }
              this.saveGameProgress('save')
            }.bind(this)
          )
      }
    }
  }
  saveGameProgress(state) {
    const savingProgress = document.getElementById('saving-progress')
    switch (state) {
      case 'save':
        // save game progress & hide saving progress indicator
        setTimeout(() => {
          window.localStorage.setItem('game', JSON.stringify(this.state))
          savingProgress.classList.add('d-hide')
        }, 500)
        break
      case 'loading':
      default:
        // show saving progress indicator
        savingProgress.classList.remove('d-hide')
        break
    }
  }
  handleGridSizeClick(e) {
    const gridSize = parseInt(e.target.innerText)
    this.setState({ size: gridSize })
    setTimeout(() => {
      this.setState({ rows: this.randomLetters() })

      // dynamically set grid size style
      const gridNews = document.getElementsByClassName('grid-new')
      const gridContainers = document.getElementsByClassName('grid-container')
      const gridSidebars = document.getElementsByClassName('grid-sidebar')

      gridNews[0].setAttribute('size', gridSize)
      gridContainers[0].setAttribute('size', gridSize)
      gridSidebars[0].setAttribute('size', gridSize)
    }, 10)
  }
  handleMinuteClick(e) {
    this.setState({ minutes: parseInt(e.target.innerText) })
    // For Tutorial : goto next Tutorial Step only for expected minute click
    const { tutorialSteps, currentStep } = this.state
    if (tutorialSteps[currentStep] === 'endless' && e.target.innerText === '0') this.nextTutorialStep()
  }
  // For Tutorial : next tutorial Step Function
  nextTutorialStep() {
    const { currentStep } = this.state
    this.setState({
      currentStep: currentStep + 1,
    })
  }
  handleKeyUp(e) {
    switch (e.keyCode) {
      // backspace | del key to undo
      case 8:
      case 46:
        e.preventDefault()
        this.popSelectionWord()
        break
      // return or enter | spacebar key to submit
      case 13:
      case 32:
        e.preventDefault()
        this.submitWord()
        break
      default:
        break
    }
  }
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
    if (this.props.generate) this.setState({ rows: this.randomLetters() })
  }
  render() {
    const wordCells = this.state.word.map((x) => x.cell)

    return (
      <div className="App">
        <header className="App-header">
          {/* <div style={{ display: 'block' }}>
            <Topbar />
          </div> */}
          <div id="saving-progress" className="d-hide">
            <Loading />
          </div>
          <div style={{ padding: '1rem' }}>
            <div>
              <div>
                <Score score={this.state.score} />
              </div>
              <div>
                <Selection word={this.state.word.map((x) => x.letter)} />
              </div>
            </div>

            <div style={{ minHeight: '8px', maxHeight: '8px' }}>&nbsp;</div>

            <div className="grid-flex">
              <GridNew
                clickThis={this.state.tutorialSteps[this.state.currentStep]}
                wordCells={wordCells}
                handleCellClick={this.handleCellClick}
              />
              <Sidebar
                clickThis={this.state.tutorialSteps[this.state.currentStep]}
                nextTutorialStep={this.nextTutorialStep}
                multiplier={this.state.multiplier}
                size={this.state.size}
                minutes={parseFloat(this.state.minutes)}
                newGame={this.state.newGame}
                setMinutes={this.setMinutes}
                saveGameProgress={this.saveGameProgress}
                quitGame={this.quitGame}
                handleUndoButtonClick={this.popSelectionWord}
                handleSubmitButtonClick={this.submitWord}
              />
            </div>
          </div>
        </header>
        {!this.state.newGame && (
          <Play
            clickThis={this.state.tutorialSteps[this.state.currentStep]}
            newGame={this.state.newGame}
            startNewGame={this.startNewGame}
            size={this.state.size}
            minutes={this.state.minutes}
            handleGridSizeClick={this.handleGridSizeClick}
            handleMinuteClick={this.handleMinuteClick}
          />
        )}
        <Player />
        <Help />
      </div>
    )
  }
}

Tutorial.defaultProps = {
  // tutorial: true,
  tutorialSteps: ['play', 'endless', 'start', 15, 13, 'submit', 16, 11, 7, 8, 'submit', 'quit'],
  currentStep: 0,
  newGame: false,
  generate: true,
  cellToggle: true,
  shuffle: true,
  shuffleAll: true,
  size: 5,
  minutes: 5,
  rows: [],
  multiplier: 1,
  score: 0,
  lastWordLength: 0,
  word: [], // { cell: '', letter: ''} cell is short for cellName
}

export default Tutorial
