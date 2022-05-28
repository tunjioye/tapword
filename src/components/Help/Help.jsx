import React from 'react'
import Modal from './../Modal'
// import GitHubButton from 'react-github-btn'

function Help({ quickTutorial, newGame }) {
  return (
    <Modal title={`HELP & ABOUT`} id={`help`}>
      {quickTutorial && !newGame && (
        <>
          <div>
            <h5 style={spacedTypo}>HOW TO PLAY</h5>
            <div>...</div>
            <div>&nbsp;</div>
            <button style={saveButton} onClick={quickTutorial}>
              Play Quick Tutorial
            </button>
          </div>
          <br />
          <br />
        </>
      )}
      <div>
        <h5 style={spacedTypo}>KEYBOARD SHORTCUTS</h5>
        <div>...</div>
        <div>&nbsp;</div>
        <dl style={{ ...dl }}>
          <dt style={{ ...dl.dt }}>
            <small>UNDO</small>
          </dt>
          <dd style={{ ...dl.dd }}>
            <kbd style={kbd}>BKSP</kbd> &nbsp;&nbsp;&nbsp; <small>OR</small> &nbsp;&nbsp;&nbsp;{' '}
            <kbd style={kbd}>DEL</kbd>
            <br />
          </dd>
          <dt style={{ ...dl.dt }}>
            <small>SUBMIT</small>
          </dt>
          <dd style={{ ...dl.dd }}>
            <kbd style={kbd}>ENTER</kbd> &nbsp;&nbsp; <small>OR</small> &nbsp;&nbsp; <kbd style={kbd}>SPACE</kbd>
            <br />
          </dd>
        </dl>
      </div>
      <br />
      <br />
      <div>
        <h5 style={spacedTypo}>ABOUT</h5>
        <div>...</div>
        <div>&nbsp;</div>
        <div>
          Tapword - <em>words are limitless</em> : is a word game that tests your knowledge of English words. Tapword
          provides a means to combine as many letters as you can to make the longest word you possibly can.
        </div>
        <div>&nbsp;</div>
        <div style={textCenter}>
          <em>Play and Boast of your Vocabulary among friends</em>
        </div>
        <div>&nbsp;</div>
        <div style={{ ...spacedTypo, ...textCenter }}>+++ THANK YOU +++</div>
        <br />
        <div style={{ ...spacedTypo, ...textCenter }}>
          ***{' '}
          <a style={customLink} href="https://github.com/tunjioye/tapword" target="_blank" rel="noopener noreferrer">
            Git Repo
          </a>{' '}
          ***
        </div>
        <br />
        {/* <div style={{ ...textCenter }}>
          <GitHubButton
            href="https://github.com/tunjioye/tapword"
            data-icon="octicon-star"
            aria-label="Star tunjioye/tapword on GitHub">Star</GitHubButton>
          <span style={{ padding: '0 5px' }}></span>
          <GitHubButton
            href="https://github.com/tunjioye/tapword/fork"
            data-icon="octicon-repo-forked"
            aria-label="Fork tunjioye/tapword on GitHub">Fork</GitHubButton>
        </div> */}
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

const kbd = {
  border: '1px solid #28F',
  padding: '3px 4px 3px 6px',
}

const textCenter = {
  textAlign: 'center',
}

const customLink = {
  color: '#FFF',
  textDecoration: 'none',
}

const dl = {
  margin: '0 auto',
  dt: {
    width: '80px',
    display: 'inline-block',
    textAlign: 'right',
    margin: '5px auto',
  },
  dd: {
    display: 'inline',
  },
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

export default Help
