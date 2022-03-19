import React from 'react'
import PropTypes from 'prop-types'
import GridCell from '../GridCell'

const GridRow = (props) => {
  let rowLetters = []
  for (let i = 0; i < props.size; i++) {
    rowLetters[i] = (
      <GridCell
        key={i.toString()}
        rowName={`r${props.rowNumber}`}
        cellNumber={((props.rowNumber * props.size) + i)}
        letter={(props.letters[i]) ? props.letters[i] : ' '}
        clickThis={props.clickThis}
        wordCells={props.wordCells}
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
  wordCells: PropTypes.array,
  handleCellClick: PropTypes.func
}

GridRow.defaultProps = {
  size: 5,
  rowNumber: 0,
  letters: 'TAPWD',
  wordCells: []
}

export default GridRow
