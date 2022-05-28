import React from 'react'
import Modal from './../Modal'

function Player() {
  const saveProfile = () => {
    console.log('saving profile and settings ...')
    window.location.hash = ''
  }
  return (
    <Modal title={`PLAYER`} id={`player`}>
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
        <div>
          <em>
            <small>cell reshuffle after submit</small>
          </em>
        </div>
      </div>
      <br />
      <br />
      <div style={{ ...spacedTypo, ...textCenter }}>
        <button style={saveButton} onClick={saveProfile}>
          Save Profile
        </button>
      </div>
    </Modal>
  )
}

const spacedTypo = {
  letterSpacing: '0.1rem',
  wordSpacing: '0.2rem',
  textTransform: 'uppercase',
  margin: 0,
  fontWeight: 600,
}

const textCenter = {
  textAlign: 'center',
}

const saveButton = {
  background: 'transparent',
  color: '#FFF',
  textDecoration: 'none',
  border: '1px solid #28F',
  padding: '6px 8px 6px 12px',
  cursor: 'pointer',
  fontWeight: 600,
}

export default Player
