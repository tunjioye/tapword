import React from 'react'
import PropTypes from 'prop-types'
import './GridNew.scss'
import GridRow from '../GridRow'

const GridNew = (props) => {
  let rows = []
  for (let i = 0; i < props.size; i++) {
    rows[i] = (
      <GridRow
        key={i.toString()}
        rowNumber={i}
        size={props.size}
        letters={props.rows[i]}
        clickThis={props.clickThis}
        wordCells={props.wordCells}
        handleCellClick={props.handleCellClick}
      />
    )
  }

  return (
    <div className="grid-container">
      <div className="grid-new">
        {rows}
      </div>
    </div>
  )
}

GridNew.propTypes = {
  size: PropTypes.number,
  rows: PropTypes.array,
  wordCells: PropTypes.array,
  handleCellClick: PropTypes.func
}

GridNew.defaultProps = {
  size: 5,
  rows: [
    'TAP',
    'WORD',
    'GAME',
    'BY',
    'TUNJI',
  ],
  wordCells: []
}

export default GridNew
