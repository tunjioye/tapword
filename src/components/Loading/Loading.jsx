import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './Loading.module.scss'

const Loading = (props) => <div className={clsx(styles['loading'], { [styles['loading-lg']]: props.large })}></div>

Loading.propTypes = {
  large: PropTypes.bool,
}

Loading.defaultProps = {
  large: false,
}

export default Loading
