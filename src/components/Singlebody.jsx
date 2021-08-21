import React from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import da from '../assets/double-arrows-Dark.svg'
function Singlebody({ galleryTitle, homePageImage, SubTitle, Description }) {
  const url = homePageImage.url
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div data-aos='slide-up' className='singleBodyDiv'>
      <img src={url} alt='' className='imageBody' />
      <div className='textHolder'>
        <h2>{SubTitle}</h2>
        <h3>{Description}</h3>
      </div>
      <div className='linkSBtn'>
        <Link to={`/gallery/${galleryTitle}`} className='link'>
          <button className='secondarybtn' type='button'>
            {galleryTitle} Gallery
            <span>
              <img src={da} alt='' className='imageSpan' />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Singlebody
