import React from 'react'
import PropTypes from 'prop-types'
import './GridRow.scss'
import CellNew from '../GridCell'

const GridRow = (props) => {
  let rowLetters = []
  for (let i = 0; i < props.size; i++) {
    rowLetters[i] = (
      <CellNew
        key={i.toString()}
        rowName={`r${props.rowNumber}`}
        cellNumber={((props.rowNumber * props.size) + i)}
        letter={(props.letters[i]) ? props.letters[i] : ' '}
        handleCellClick={props.handleCellClick}
      />
    )
  }
  return (
    <>
      {rowLetters}
    </>
  )
}

GridRow.propTypes = {
  size: PropTypes.number,
  rowNumber: PropTypes.number,
  letters: PropTypes.string,
  handleCellClick: PropTypes.func
}

GridRow.defaultProps = {
  size: 5,
  rowNumber: 0,
  letters: 'TAPWD'
}

export default GridRow
