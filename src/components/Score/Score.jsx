import React from 'react'
import PropTypes from 'prop-types'
import SelectionCell from './../SelectionCell'
import selectionStyles from '../Selection/Selection.module.scss'

const Score = (props) => {
  let output = []
  let score = props.score.toString()
  for (let i = 0; i < score.length; i++) {
    output[i] = <SelectionCell key={i.toString()} letter={score[i] ? score[i] : ' '} />
  }

  return (
    <div className={selectionStyles['selection']}>
      <span className={selectionStyles['selection-info']}>SCORE</span>
      <div className={selectionStyles['selection-wrapper']}>
        <span id="score">{output}</span>
      </div>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number,
}

Score.defaultProps = {
  score: 0,
}

export default Score
