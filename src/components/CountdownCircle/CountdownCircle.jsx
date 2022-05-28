import React from 'react'
import PropTypes from 'prop-types'
import styles from './CountdownCircle.module.scss'

const CountdownCircle = ({ radius }) => (
  <svg className={styles['countdown-svg']} style={{ marginLeft: '-7px', marginTop: '-8px' }}>
    <path fill="none" stroke="#2bf" strokeWidth="0.1rem" d={describeArc(50, 50, 40, 0, radius)} />
  </svg>
)

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle)
  var end = polarToCartesian(x, y, radius, startAngle)

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  var d = ['M', start.x.toFixed(1), start.y.toFixed(1), 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ')

  return d
}

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

CountdownCircle.propTypes = {
  raius: PropTypes.number,
}

CountdownCircle.defaultProps = {
  radius: 359.9,
}

export default CountdownCircle
