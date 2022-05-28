import React from 'react'
import PropTypes from 'prop-types'
import styles from './SelectionCell.module.scss'

const SelectionCell = (props) => (
  <div className={styles['selection-cell']} style={{ ...props.style }}>
    {props.letter.charAt(0)}
  </div>
)

SelectionCell.propTypes = {
  letter: PropTypes.string,
}

SelectionCell.defaultProps = {
  letter: 'T',
}

export default SelectionCell
