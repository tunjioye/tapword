import React from 'react';

function Settings() {
  return (
    <div className="modal" id="settings">
      <a href="#close" className="modal-overlay" aria-label="Close"> </a>
      <div className="modal-container">
        <div className="modal-header">
          <a href="#close" className="btn btn-clear" aria-label="Close"> </a>
          <div className="modal-title">
            <strong>GAME SETTINGS</strong>
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

export default Settings;
