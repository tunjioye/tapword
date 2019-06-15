import React from 'react';

function Help() {
  return (
    <div className="modal" id="help">
      <a href="#close" className="modal-overlay" aria-label="Close"> </a>
      <div className="modal-container">
        <div className="modal-header">
          <a href="#close" className="btn btn-clear" aria-label="Close"> </a>
          <div className="modal-title">
            <strong style={spacedTypo}>HELP &amp; ABOUT</strong>
          </div>
        </div>
        <div className="modal-body">
          <div className="content">
            <div>...</div>
          </div>
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  );
}

const spacedTypo = {
  letterSpacing: '0.1rem',
  wordSpacing: '0.2rem',
  textTransform: 'uppercase',
  fontWeight: 500
}

export default Help;
