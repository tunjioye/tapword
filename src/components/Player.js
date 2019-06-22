import React from 'react';

class Player extends React.Component {
  saveProfile() {
    console.log('saving profile and settings ...')
    window.location.hash = ''
  }
  render() {
    return (
      <div className="modal" id="player">
        <a href="#close" className="modal-overlay" aria-label="Close"> </a>
        <div className="modal-container">
          <div className="modal-header">
            <a href="#close" className="btn btn-clear" aria-label="Close"> </a>
            <div className="modal-title">
              <strong style={spacedTypo}>PLAYER</strong>
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <div>
                <h5 style={spacedTypo}>PROFILE</h5>
                <div>...</div>
                <div>&nbsp;</div>
                <div>Username : tunjioye</div>
                <div>&nbsp;</div>
                <div>Highest Score : 2019</div>
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
              <br />
              <br />
              <div style={{ ...spacedTypo, ...textCenter }}><button style={saveButton} onClick={this.saveProfile.bind(this)}>Save Profile</button></div>
            </div>
          </div>
          <div className="modal-footer"></div>
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

export default Player;
