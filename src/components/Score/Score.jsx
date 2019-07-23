import React from 'react'
import PropTypes from 'prop-types'
import './../Selection/Selection.scss'
import './Score.scss'
import SelectionCell from './../SelectionCell'

const Score = (props) => {
  let output = []
  let score = props.score.toString()
  for (let i = 0; i < score.length; i++) {
    output[i] = (<SelectionCell key={i.toString()} letter={(score[i]) ? score[i] : ' '} />)
  }

  return (
    <div className="selection">
      <span className="selection-info">SCORE</span>
      <div className="selection-wrapper">
        <span id="score">{output}</span>
      </div>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number
}

Score.defaultProps = {
  score: 0
}

export default Score
