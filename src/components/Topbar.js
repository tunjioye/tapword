import React from 'react';
import '../topbar.scss';

class Topbar extends React.Component {
  constructor(props) {
    super(props)
    this.menuIconRef = React.createRef()
    this.menuRef = React.createRef()
  }
  openMenu() {
    this.menuIconRef.current.classList.add('active');
    this.menuRef.current.classList.add('active');
  }
  closeMenu() {
    this.menuIconRef.current.classList.remove('active');
    this.menuRef.current.classList.remove('active');
  }
  render() {
    return (
      <div className="topbar">
        <div className="menu-icon" ref={this.menuIconRef} onClick={this.openMenu.bind(this)}>
          <div className="line-top"></div>
          <div className="line-bottom"></div>
        </div>
        <div className="menu" ref={this.menuRef} onClick={this.closeMenu.bind(this)}>
          <ul>
            <li><span>PLAY</span></li>
            <li><span>SETTINGS</span></li>
            <li><span>PLAYER</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Topbar;
