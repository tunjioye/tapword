import React from 'react'
import PropTypes from 'prop-types'
import './Popover.scss'

const Popover = ({ children, className }) => (
  <div className={`popover ${className}`}>
    { children }
    <div className="popover-container"></div>
  </div>
)

Popover.propTypes = {
  children: PropTypes.node
}

Popover.defaultProps = {
  children: '...'
}

export default Popover
