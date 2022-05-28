import React from 'react'

function Topbar() {
  const menuIconRef = useRef(null)
  const menuRef = useRef(null)

  function toggleMenu() {
    menuIconRef.current.classList.toggle('active')
    menuRef.current.classList.toggle('active')
  }

  return (
    <div className="topbar" onClick={toggleMenu}>
      <div className="menu-icon" ref={menuIconRef}>
        <div className="line-top"></div>
        <div className="line-bottom"></div>
      </div>
      <div className="menu" ref={menuRef}>
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

export default Topbar
