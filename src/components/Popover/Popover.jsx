import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
// import './Popover.scss'

const Popover = ({ children, className = '' }) => (
  <div className={clsx('popover', className)}>
    {children}
    <div className="popover-container"></div>
  </div>
)

Popover.propTypes = {
  children: PropTypes.node,
}

Popover.defaultProps = {
  children: '...',
}

export default Popover
