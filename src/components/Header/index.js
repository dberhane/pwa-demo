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

    <ul>
      <li>
        <Link to={'/'}>
          <img src={logo} alt="Logo" style={{ width: '12.0em' }} />
        </Link>
      </li>
      <li>
        <Link to={'/'}>BMJ Open blogs</Link>
      </li>
      <li>About us</li>
      <li>Topic Index</li>
      <li>Home</li>
    </ul>
  </div>
)

export default Header
