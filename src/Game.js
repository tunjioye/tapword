import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import Tutorial from './Tutorial'
function Game(props) {
  const [tutorial, setTutorial] = useState(props.tutorial)

  const quickTutorial = () => {
    if (window.confirm('Quick Tutorial?')) {
      setTutorial(true)
    }
  }

  const endTutorial = () => {
    setTutorial(false)
  }

  useEffect(() => {
    setTimeout(() => {
      if (!window.localStorage.getItem('tw_quicktutorial')) {
        // request quick Tutoial Permission
        quickTutorial()
      } else {
        endTutorial()
      }
    }, 100)
  }, [])

  return <>{tutorial ? <Tutorial endTutorial={endTutorial} /> : <App quickTutorial={quickTutorial} />}</>
}

Game.propTypes = {
  tutorial: PropTypes.bool,
}

Game.defaultProps = {
  tutorial: false,
}

export default Game
