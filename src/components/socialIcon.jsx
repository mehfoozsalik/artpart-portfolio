import React from 'react'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/Instagram.svg'
import dribble from '../assets/dribble.svg'
import behance from '../assets/behance.svg'
import Pinterest from '../assets/Pinterest.svg'
export default function socialIcon() {
  return (
    <>
      <div className='socialSide'>
        <div className='socialIcons'>
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
        <h4 className='reserveText'>All right reserved</h4>
      </div>
    </>
  )
}
