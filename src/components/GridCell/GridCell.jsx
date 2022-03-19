import React from 'react'
import PropTypes from 'prop-types'
// import './GridCell.scss'
import Popover from './../Popover'

const GridCell = (props) => {
  const cell = `c${props.cellNumber}`

  const cellInfo = (
    <div
      className={`grid-cell ${(props.wordCells.indexOf(cell) !== -1) ? "selected" : ""}`}
      row={props.rowName}
      cell={cell}
      onClick={props.handleCellClick}
    >
      {props.letter.charAt(0)}
    </div>
  )

  // For Tutorial : show Click This Popover for expected Grid Cell
  if (props.clickThis && props.clickThis === props.cellNumber) {
    return (
      <Popover className="click-this">
        { cellInfo }
      </Popover>
    )
  }

  return (cellInfo)
}

GridCell.propTypes = {
  letter: PropTypes.string,
  rowName: PropTypes.string,
  cellNumber: PropTypes.number,
  wordCells: PropTypes.array,
  handleCellClick: PropTypes.func
}

GridCell.defaultProps = {
  letter: 'T',
  rowName: 'r0',
  cellNumber: 0,
  wordCells: []
}

export default GridCell
