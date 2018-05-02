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

    <nav className="clearfix white bg-black">
      <div className="sm-col">
          <Link to={'/'} className="btn py2">
            <img src={logo} alt="Logo" style={{ width: '12.0em' }} />
          </Link>
           <Link to={'/'} className="btn py2">
            BMJ Open blogs
          </Link>
      </div>
      <div className="sm-col-right">
        <Link to="/" className="btn py2">
          About us
        </Link>
        <Link to="/" className="btn py2">
          Topic Index
        </Link>
        <Link to="/" className="btn py2">
          Home
        </Link>
      </div>
    </nav>
  </div>
)

export default Header
