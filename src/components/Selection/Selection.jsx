import React from 'react'
import PropTypes from 'prop-types'
import './Selection.scss'
import SelectionCell from './../SelectionCell'

const Selection = (props) => {
  let output = []
  for (let i = 0; i < props.word.length; i++) {
    output[i] = (<SelectionCell key={i.toString()} letter={(props.word[i]) ? props.word[i] : ' '} />)
  }

  return (
    // #selection-word is important for the shake animation
    <div id="selection-word" className="selection">
      <span className="selection-info">WORD INPUT</span>
      <div className="selection-wrapper">
        <span id="word">
          {/* important spacing fix via style */}
          <SelectionCell letter=' ' style={{ height: '64px' }} />
          {output}
        </span>
      </div>
    </div>
  )
}

Selection.propTypes = {
  word: PropTypes.string
}

Selection.defaultProps = {
  word: ''
}

export default Selection
