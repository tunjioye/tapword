import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

const Modal = ({ id, transparent, canClose, title, children, footer }) => (
  <div className="modal" id={id}>
    {!transparent
      ? <span className="modal-overlay" style={{ background: 'rgb(25, 28, 34)' }}></span>
      : <a href="#close" className="modal-overlay" aria-label="Close"> </a>
    }
    <div className="modal-container">
      <div className="modal-header">
        {canClose &&
          <a href="#close" className="btn btn-clear" aria-label="Close"> </a>
        }
        <div className="modal-title">
          <strong style={spacedTypo}>{ title }</strong>
        </div>
      </div>
      <div className="modal-body">
        <div className="content">
          { children }
        </div>
      </div>
      <div className="modal-footer">
        { footer }
      </div>
    </div>
  </div>
)

const spacedTypo = {
  letterSpacing: '0.1rem',
  wordSpacing: '0.2rem',
  textTransform: 'uppercase',
  margin: 0,
  fontWeight: 600
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string,
  footer: PropTypes.node,
  transparent: PropTypes.bool,
  canClose: PropTypes.bool
}

Modal.defaultProps = {
  children: 'Here is the default modal content ...',
  title: 'TITLE',
  id: 'modal',
  footer: '',
  transparent: true,
  canClose: true
}

export default Modal
