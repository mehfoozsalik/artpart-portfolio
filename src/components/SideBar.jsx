import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
///icons
import twitter from '../assets/twitter.svg'
import instagram from '../assets/Instagram.svg'
import dribble from '../assets/dribble.svg'
import behance from '../assets/behance.svg'
import Pinterest from '../assets/Pinterest.svg'

function SideBar(props) {
  const [toggle, setToggle] = React.useState(false)
  function clickHandler() {
    setToggle(!toggle)
  }
  return (
    <>
      <div
        className={`${
          toggle ? 'SideBarlogo positionFixed' : 'SideBarlogo positionAbsolute'
        }`}
      >
        <Link to='/' className='logoLink'>
          <img src={logo} alt='logo' />
        </Link>
        <button className='toggleBtnC' onClick={clickHandler}>
          <div className={`${toggle ? 'HamDiv HamOne' : 'HamDiv'}`} />
          <div className={`${toggle ? 'HamDiv HamTwo' : 'HamDiv'}`} />
          <div className={`${toggle ? 'HamDiv HamThree' : 'HamDiv'}`} />
        </button>
      </div>
      <div className='bodySpace'></div>
      <div
        className={`${
          toggle ? 'sideBarContainer showsideBar' : 'sideBarContainer'
        }`}
      >
        <div className='bodySpace'></div>
        <nav>
          <ul className='SlidBar-Nav'>
            <li onClick={clickHandler}>
              <NavLink
                exact
                to='/'
                activeClassName='SideBaractiveNavlink'
                className='SideBar-NavLink'
              >
                Home
              </NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink
                to='/gallery'
                activeClassName='SideBaractiveNavlink'
                className='SideBar-NavLink'
              >
                Gallery
              </NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink
                to='/aboutus'
                activeClassName='SideBaractiveNavlink'
                className='SideBar-NavLink'
              >
                AboutUs
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='SideBar-SocialIcons'>
          <div className='SideBar-SocialIconsContainer'>
            <a href='https://twitter.com/art_part_art' target='blank'>
              <img src={twitter} alt='twitterIcon' />
            </a>
            <a href='https://www.instagram.com/artpartfolio/' target='blank'>
              <img src={instagram} alt='instargramIcon' />
            </a>
            <a href='https://dribbble.com/artpartfolio' target='blank'>
              <img src={dribble} alt='dribbleIcon' />
            </a>
            <a href='https://www.behance.net/mehfoozsalik1' target='blank'>
              <img src={behance} alt='behanceIcon' />
            </a>
            <a href='https://www.pinterest.com/artpartfolio' target='blank'>
              <img src={Pinterest} alt='PinterestIcon' />
            </a>
          </div>
          <h4 className='SideBar-reserveText'>All right reserved</h4>
        </div>
      </div>
    </>
  )
}

export default SideBar
