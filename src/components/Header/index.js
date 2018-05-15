import React from 'react'
import Link from 'gatsby-link'
import banner from './ad001.gif'
import logo from './bmjopen-logo.png'

const Header = () => (
  <div className="container">
    <div className="row" style={{justifyContent:"center"}}>
      <Link to={'/'}>
        <img src={banner} alt="banner" />
      </Link>
    </div>
    <header className="sticky" style={{paddingRight:150}}>
    <label htmlFor="drawer-checkbox" className="button drawer-toggle"></label>
      <Link className="logo" to={'/'}>
        <img src={logo} alt="Logo" style={{ maxWidth: '12.0em' }} />
      </Link>
      <Link className="button hidden-sm" to='/page/about' style={{float:"right"}}>
        About us
      </Link>
      <Link className="button hidden-sm" to='/page/topic-index' style={{float:"right"}}>
        Topic Index
      </Link>
      <Link className="button hidden-sm" to={'/'} style={{float:"right"}}>
        Home
      </Link>
    </header>
    
    <div className="row hidden-md hidden-lg">
    <input type="checkbox" name="drawer-checkbox" id="drawer-checkbox"/>
      <div className="col-md-3 drawer">
      <label htmlFor="drawer-checkbox" className="close"></label>
        <nav>
          <Link className="button" to={'/'}>
            BMJ Open blogs
          </Link>
          <br/>
          <Link className="button" to='/page/about'>
            About us
          </Link>
          <br/>
          <Link className="button" to='/page/topic-index'>
            Topic Index
          </Link>
          <br/>
          <Link className="button" to={'/'}>
            Home
          </Link>
        </nav>
      </div>
     </div> 
  </div> 
)

export default Header
