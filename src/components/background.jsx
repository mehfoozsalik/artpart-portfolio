import React from 'react'
import { Link } from 'react-router-dom'
import bgimage from '../assets/bgImageTwo.svg'
import da from '../assets/double-right-arrows-angles.svg'

export default function Background() {
  return (
    <>
      <div className='bgContainer'>
        <div className='title-container'>
          <div className='title'>
            <h1>Creative Art Partfolio</h1>
            <h3>Artist | Ui & Ux Designer | Web Developer | WordPress</h3>
            <h3>Check Out our gallery to find out more about our services</h3>
          </div>
          <Link to='/gallery' className='link'>
            <button className='btn' type='button'>
              gallery
              <span>
                <img src={da} alt='' />
              </span>
            </button>
          </Link>
        </div>
        <div className='bgImage'>
          <img src={bgimage} alt='background' />
        </div>
      </div>
    </>
  )
}
