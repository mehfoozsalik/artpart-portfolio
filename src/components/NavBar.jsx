import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function NavBar(props) {
  return (
    <>
      <div className='logo'>
        <div className='logoContainer'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
      </div>
      <nav className='NavBar-Nav'>
        <ul>
          <li>
            <NavLink
              exact
              to='/'
              activeClassName='activeNavlink'
              className='none'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/gallery'
              activeClassName='activeNavlink'
              className='none'
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/aboutus'
              activeClassName='activeNavlink'
              className='none'
            >
              AboutUs
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
