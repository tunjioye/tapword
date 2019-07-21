import React from 'react';
import GitHubButton from 'react-github-btn';

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
            <div>
              <h5 style={spacedTypo}>HOW TO PLAY</h5>
              <div>...</div>
              <div>&nbsp;</div>
              <div>&bull; Select some letters to make a word</div>
              <div>&bull; Click Submit Button to evaluate you Score</div>
              <div>&bull; QUITING IS NOT AN OPTION!</div>
            </div>
            <br />
            <br />
            <div>
              <h5 style={spacedTypo}>KEYBOARD SHORTCUTS</h5>
              <div>...</div>
              <div>&nbsp;</div>
              <dl style={{ ...dl }}>
                <dt style={{ ...dl.dt }}>
                  <small>UNDO</small>
                </dt>
                <dd style={{ ...dl.dd }}>
                  <kbd style={kbd}>BKSP</kbd> &nbsp;&nbsp;&nbsp; <small>OR</small> &nbsp;&nbsp;&nbsp; <kbd style={kbd}>DEL</kbd>
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
              <div>Tapword - <em>words are limitless</em> : is a word game that tests your knowledge of English words. Tapword provides a means to combine as many letters as you can to make the longest word you possibly can.</div>
              <div>&nbsp;</div>
              <div style={textCenter}><em>Play and Boast of your Vocabulary among friends</em></div>
              <div>&nbsp;</div>
              <div style={{ ...spacedTypo, ...textCenter }}>+++ THANK YOU +++</div>
            </div>
            <br />
            <br />
            <div style={{ ...spacedTypo, ...textCenter }}>*** <a style={customLink} href="https://github.com/tunjioye/tapword" target="_blank" rel="noopener noreferrer">Git Repo</a> ***</div>
            <br />
            <div style={{ ...textCenter }}>
              <GitHubButton
                href="https://github.com/tunjioye/tapword"
                data-icon="octicon-star"
                aria-label="Star tunjioye/tapword on GitHub">Star</GitHubButton>
              <span style={{ padding: '0 5px' }}></span>
              <GitHubButton
                href="https://github.com/tunjioye/tapword/fork"
                data-icon="octicon-repo-forked"
                aria-label="Fork tunjioye/tapword on GitHub">Fork</GitHubButton>
            </div>
            <br />
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}

const spacedTypo = {
  letterSpacing: '0.1rem',
  wordSpacing: '0.2rem',
  textTransform: 'uppercase',
  margin: 0,
  fontWeight: 600
}

const kbd = {
  border: '1px solid #28F',
  padding: '3px 4px 3px 6px'
}

const textCenter = {
  textAlign: 'center'
}

const customLink = {
  color: '#FFF',
  textDecoration: 'none'
}

const dl = {
  margin: '0 auto',
  dt: {
    width: '80px',
    display: 'inline-block',
    textAlign: 'right',
    margin: '5px auto'
  },
  dd: {
    display: 'inline'
  }
}

export default Help;
