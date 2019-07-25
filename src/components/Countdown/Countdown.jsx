import React from 'react'
import PropTypes from 'prop-types'
import './Countdown.scss'
// import CountdownCircle from './../CountdownCircle/CountdownCircle'

class Countdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: {},
      seconds: this.props.minutes * 60
    }

    this.timer = 0
    this.secondsToTime = this.secondsToTime.bind(this)
    this.calculateTimeLeft = this.calculateTimeLeft.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }

  secondsToTime(secs){
    let divisor_for_minutes = secs % (60 * 60)
    let minutes = Math.floor(divisor_for_minutes / 60)

    let divisor_for_seconds = divisor_for_minutes % 60
    let seconds = Math.ceil(divisor_for_seconds)

    let obj = {
      "m": minutes,
      "s": seconds
    }

    return obj
  }

  calculateTimeLeft() {
    let timeLeftVar = this.secondsToTime(this.state.seconds)
    this.setState({ time: timeLeftVar })
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  stopTimer() {
    clearInterval(this.timer)
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    })

    // Check if we're at zero.
    if (seconds === 0) this.stopTimer()
  }

  componentDidMount() {
    this.calculateTimeLeft()
    this.startTimer()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ seconds: nextProps.minutes * 60 })
      this.calculateTimeLeft()
    }
  }

  render() {
    // const { minutes } = this.props
    const { m, s } = this.state.time
    // const minutesRadius = mapNumber(m, minutes, 0, 0, 359.9)
    // const secondsRadius = mapNumber(s, 60, 0, 0, 359.9)

    return (
      <div>
        {/* <h1>Countdown</h1> */}
        <div className='countdown-wrapper'>
          <div className='countdown-item'>
            {/* Disabled for now because it seems hard to make responsive */}
            {/* <CountdownCircle radius={(m === 0) ? secondsRadius : minutesRadius} /> */}
            {(m === 0) ? s : m}
            <span className="highlight">{(m === 0) ? 's' : 'm'}</span>
          </div>
        </div>
      </div>
    )
  }
}

// // Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// function mapNumber(number, in_min, in_max, out_min, out_max) {
//   return (out_max - ((number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)).toFixed(1)
// }

Countdown.propTypes = {
  minutes: PropTypes.number
}

Countdown.defaultProps = {
  minutes: 2
}

export default Countdown