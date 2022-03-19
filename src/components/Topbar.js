import React from 'react'

class Topbar extends React.Component {
  constructor(props) {
    super(props)
    this.menuIconRef = React.createRef()
    this.menuRef = React.createRef()
  }
  toggleMenu() {
    this.menuIconRef.current.classList.toggle('active')
    this.menuRef.current.classList.toggle('active')
  }
  render() {
    return (
      <div className="topbar" onClick={this.toggleMenu.bind(this)}>
        <div className="menu-icon" ref={this.menuIconRef}>
          <div className="line-top"></div>
          <div className="line-bottom"></div>
        </div>
        <div className="menu" ref={this.menuRef}>
          <ul>
            <li>
              <span>PLAY</span>
            </li>
            <li>
              <span>SETTINGS</span>
            </li>
            <li>
              <span>PLAYER</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Topbar
