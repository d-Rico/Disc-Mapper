import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="header-bar">
    <nav>
      <Link to='/'>Disc Mapper</Link>
    </nav>
    <nav>
      <Link to='/'>Sign Up</Link>
    </nav>
  </header>
)

export default Header
