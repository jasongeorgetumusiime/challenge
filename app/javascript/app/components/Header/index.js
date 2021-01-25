import React from 'react'
import Brand from './Brand'

function Header() {
  return (
    <div className="app-header">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Brand />
        </div>
      </nav>
    </div>
  )
}

export default Header