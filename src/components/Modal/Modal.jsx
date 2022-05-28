import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.scss'

const Modal = ({ id, transparent, canClose, title, children, footer }) => (
  <div className={styles['modal']} id={id}>
    {!transparent ? (
      <span className={styles['modal-overlay']} style={{ background: 'rgb(25, 28, 34)' }}></span>
    ) : (
      <a href="#close" className={styles['modal-overlay']} aria-label="Close" />
    )}
    <div className={styles['modal-container']}>
      <div className={styles['modal-header']}>
        {canClose && <a href="#close" className={styles['modal-close-btn']} aria-label="Close" />}
        <div className={styles['modal-title']}>
          <strong style={spacedTypo}>{title}</strong>
        </div>
      </div>
      <div className={styles['modal-body']}>
        <div className="content">{children}</div>
      </div>
      <div className={styles['modal-footer']}>{footer}</div>
    </div>
  </div>
)

const spacedTypo = {
  letterSpacing: '0.1rem',
  wordSpacing: '0.2rem',
  textTransform: 'uppercase',
  margin: 0,
  fontWeight: 600,
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string,
  footer: PropTypes.node,
  transparent: PropTypes.bool,
  canClose: PropTypes.bool,
}

Modal.defaultProps = {
  children: 'Here is the default modal content ...',
  title: 'TITLE',
  id: 'modal',
  footer: '',
  transparent: true,
  canClose: true,
}

export default Modal
