import React from 'react'
import PropTypes from 'prop-types'
import './GridCell.scss'

const GridCell = (props) => (
  <div
    className={(props.className) ? "grid-cell " + props.className : "grid-cell"}
    row={props.rowName}
    cell={`c${props.cellNumber}`}
    onClick={props.handleCellClick}
  >
    {props.letter.charAt(0)}
  </div>
)

GridCell.propTypes = {
  letter: PropTypes.string,
  rowName: PropTypes.string,
  cellNumber: PropTypes.number,
  handleCellClick: PropTypes.func
}

GridCell.defaultProps = {
  letter: 'T',
  rowName: 'r0',
  cellNumber: 0
}

export default GridCell
