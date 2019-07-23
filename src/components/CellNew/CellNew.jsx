import React from 'react'
import PropTypes from 'prop-types'
import './CellNew.scss'

const CellNew = (props) => (
  <div
    className={(props.className) ? "cell-new " + props.className : "cell-new"}
    row={props.rowName}
    cell={`c${props.cellNumber}`}
    onClick={props.handleCellClick}
  >
    {props.letter.charAt(0)}
  </div>
)

CellNew.propTypes = {
  letter: PropTypes.string,
  rowName: PropTypes.string,
  cellNumber: PropTypes.number,
  handleCellClick: PropTypes.func
}

CellNew.defaultProps = {
  letter: 'T',
  rowName: 'r0',
  cellNumber: 0
}

export default CellNew
