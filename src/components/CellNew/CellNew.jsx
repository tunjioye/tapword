import React from 'react'
import PropTypes from 'prop-types'
import './CellNew.scss'

const CellNew = (props) => (
  <div
    className={(props.className) ? "cell-new " + props.className : "cell-new"}
    cell={props.cellName}
    onClick={props.handleCellClick}
  >
    {props.letter.charAt(0)}
  </div>
)

CellNew.propTypes = {
  letter: PropTypes.string,
  cellNumber: PropTypes.number,
  handleCellClick: PropTypes.func
}

CellNew.defaultProps = {
  letter: 'T',
  cellNumber: 0
}

export default CellNew
