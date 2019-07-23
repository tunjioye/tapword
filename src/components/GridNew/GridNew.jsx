import React from 'react'
import PropTypes from 'prop-types'
import './GridNew.scss'
import RowNew from './../RowNew'

const GridNew = (props) => {
  let rows = []
  for (let i = 0; i < props.size; i++) {
    rows[i] = (
      <RowNew
        key={i.toString()}
        rowNumber={i}
        size={props.size}
        letters={props.rows[i]}
        handleCellClick={props.handleCellClick}
      />
    )
  }
  return (
    <div className="grid-new">
      {rows}
    </div>
  )
}

GridNew.propTypes = {
  size: PropTypes.number,
  rows: PropTypes.array,
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
  ]
}

export default GridNew
