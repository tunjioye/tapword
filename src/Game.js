import React from 'react'
import PropTypes from 'prop-types'
import './styles/game.css'
import App from './App'
import Tutorial from './Tutorial'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tutorial: props.tutorial
    }

    this.quickTutorial = this.quickTutorial.bind(this)
    this.endTutorial = this.endTutorial.bind(this)
  }

  quickTutorial() {
    if (window.confirm('Quick Tutorial?')) {
      this.setState({
        tutorial: true
      })
    }
  }

  endTutorial() {
    this.setState({
      tutorial: false
    })
  }

  componentDidMount() {
    setTimeout(() => {
      if (!window.localStorage.getItem('tw_quicktutorial')) {
        // request quick Tutoial Permission
        this.quickTutorial()
      } else {
        this.endTutorial()
      }
    }, 100)
  }

  render() {
    return (this.state.tutorial) ? <Tutorial endTutorial={this.endTutorial} /> : <App />
  }
}

Game.propTypes = {
  tutorial: PropTypes.bool
}

Game.defaultProps = {
  tutorial: false
}

export default Game
