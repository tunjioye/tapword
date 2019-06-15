import React from 'react';

class Settings extends React.Component {
  saveSettings() {
    console.log('saving settings ...')
  }
  render() {
    return (
      <div className="modal" id="settings">
        <a href="#close" className="modal-overlay" aria-label="Close"> </a>
        <div className="modal-container">
          <div className="modal-header">
            <a href="#close" className="btn btn-clear" aria-label="Close"> </a>
            <div className="modal-title">
              <strong style={spacedTypo}>GAME SETTINGS</strong>
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <div>
                <h5 style={spacedTypo}>GRID SIZE</h5>
                <div>...</div>
                <div>&nbsp;</div>
                <div>{[3,4,5,6,7].toString().replace(/,/g, ' ')}</div>
              </div>
              <br />
              <br />
              <div>
                <h5 style={spacedTypo}>TIMER</h5>
                <div>...</div>
                <div>&nbsp;</div>
                <div>{[0,1,2,3,4,5,6,7,8,9,10].toString().replace(/,/g, ' ')}</div>
                <div><em><small>select 0 for endless mode</small></em></div>
              </div>
              <br />
              <br />
              <div>
                <h5 style={spacedTypo}>CELL SHUFFLE TYPE</h5>
                <div>...</div>
                <div>&nbsp;</div>
                <div>SHUFFLE SELECTED CELLS | SHUFFLE ALL CELLS</div>
                <div><em><small>cell reshuffle after submit</small></em></div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div style={{ ...spacedTypo, ...textCenter }}><button style={saveButton} onClick={this.saveSettings.bind(this)}>Save Settings</button></div>
          </div>
        </div>
      </div>
    );
  }
}

const spacedTypo = {
  letterSpacing: '0.1rem',
  wordSpacing: '0.2rem',
  textTransform: 'uppercase',
  margin: 0,
  fontWeight: 500
}

const textCenter = {
  textAlign: 'center'
}

const saveButton = {
  background: 'transparent',
  color: '#FFF',
  textDecoration: 'none',
  border: '1px solid #28F',
  padding: '6px 8px 6px 12px',
  cursor: 'pointer',
  fontWeight: 500
}

export default Settings;
