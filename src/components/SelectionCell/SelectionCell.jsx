import React from 'react'
import PropTypes from 'prop-types'
// import './SelectionCell.scss'

const SelectionCell = (props) => (
  <div className="selection-cell" style={{ ...props.style }}>
    {props.letter.charAt(0)}
  </div>
)

SelectionCell.propTypes = {
  letter: PropTypes.string
}

SelectionCell.defaultProps = {
  letter: 'T'
}

export default SelectionCell
