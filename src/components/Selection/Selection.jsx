import React from 'react'
import PropTypes from 'prop-types'
import SelectionCell from './../SelectionCell'
import styles from './Selection.module.scss'

const Selection = (props) => {
  let output = []
  for (let i = 0; i < props.word.length; i++) {
    output[i] = <SelectionCell key={i.toString()} letter={props.word[i] ? props.word[i] : ' '} />
  }

  return (
    // #selection-word is important for the shake animation
    <div id="selection-word" className={styles['selection']}>
      <span className={styles['selection-info']}>WORD INPUT</span>
      <div className={styles['selection-wrapper']}>
        <span id="word">
          {/* important spacing fix via style */}
          <SelectionCell letter=" " style={{ height: '64px' }} />
          {output}
        </span>
      </div>
    </div>
  )
}

Selection.propTypes = {
  word: PropTypes.array,
}

Selection.defaultProps = {
  word: [],
}

export default Selection
