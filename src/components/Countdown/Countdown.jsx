import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import CountdownCircle from './../CountdownCircle'
function Countdown(props) {
  const [time, setTime] = useState({})
  const [seconds, setSeconds] = useState(props.minutes * 60)

  let timer = 0

  const secondsToTime = (secs) => {
    let divisor_for_minutes = secs % (60 * 60)
    let minutes = Math.floor(divisor_for_minutes / 60)

    let divisor_for_seconds = divisor_for_minutes % 60
    let seconds = Math.ceil(divisor_for_seconds)

    let obj = {
      m: minutes,
      s: seconds,
    }

    return obj
  }

  const calculateTimeLeft = () => {
    let timeLeftVar = secondsToTime(seconds)
    setTime(timeLeftVar)
  }

  const startTimer = () => {
    if (timer === 0 && seconds > 0) {
      timer = setInterval(countDown, 1000)
    }
  }

  const stopTimer = () => {
    clearInterval(timer)
    timer = 0 // reset to 0 !important
  }

  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = seconds - 1 > 0 ? seconds - 1 : 0
    setTime(secondsToTime(seconds))
    setSeconds(seconds)

    if (seconds > 0) {
      // set Game / App Minutes & save Game Progress
      props.setTimeMinutes(parseFloat(seconds / 60).toFixed(3))
      setTimeout(() => {
        props.saveGameProgress('save')
      }, 1000)
    } else {
      // stop timer
      stopTimer()
      // Quit Game with a Time Up
      props.quitGame('TIME UP!')
    }
  }

  useEffect(() => {
    calculateTimeLeft()
    if (props.newGame) startTimer()
    if (!props.newGame) stopTimer()
  }, [props.newGame])

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (this.props !== nextProps) {
  //     setTimeout(() => {
  //       this.setState({ seconds: nextProps.minutes * 60 })
  //       if (nextProps.newGame) this.startTimer()
  //       if (!nextProps.newGame) this.stopTimer()
  //     }, 10)
  //   }
  // }

  const { m, s } = time

  return (
    <div>
      {/* <h1>Countdown</h1> */}
      <div className="countdown-wrapper">
        <div className="countdown-item">
          {/* Disabled for now because it seems hard to make responsive */}
          {/* <CountdownCircle radius={(m === 0) ? secondsRadius : minutesRadius} /> */}
          {m === 0 ? s : m}
          <span className="highlight">{m === 0 ? 's' : 'm'}</span>
        </div>
      </div>
    </div>
  )
}

Countdown.propTypes = {
  minutes: PropTypes.number,
  newGame: PropTypes.bool,
  setTimeMinutes: PropTypes.func,
  saveGameProgress: PropTypes.func,
  quitGame: PropTypes.func,
}

Countdown.defaultProps = {
  minutes: 2,
}

export default Countdown
