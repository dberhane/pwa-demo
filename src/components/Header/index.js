import React from 'react'
import Link from 'gatsby-link'
import banner from './ad001.gif'
import logo from './bmjopen-logo.png'

const Header = () => (
  <div>
    <Link to={'/'}>
      <img
        src={banner}
        alt="banner"
        style={{ maxHeight: 90, maxWidth: 728, marginTop: '1em' }}
      />
    </Link>

    <header className="sticky">
      <Link className="logo" to={'/'}>
        <img src={logo} alt="Logo" style={{ width: '12.0em' }} />
      </Link>
      <Link className="button" to={'/'}>
        BMJ Open blogs
      </Link>
      <Link className="button" to={'/'}>
        About us
      </Link>
      <Link className="button" to={'/'}>
        Topic Index
      </Link>
      <Link className="button" to={'/'}>
        Home
      </Link>
    </header>
  </div>
)

export default Header
