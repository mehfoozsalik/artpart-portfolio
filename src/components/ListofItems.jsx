import React from 'react'
import Aos from 'aos'
import { Link } from 'react-router-dom'
export default function ListofItems({ Image, galleryTitle }) {
  const url = Image.url
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Link to={`/gallery/${galleryTitle}`}>
      <div data-aos='fade-up' className='galleryItems'>
        <div className='galleryImageHolder'>
          <img src={url} alt={galleryTitle} className='galleryImage' />
        </div>
        <div className='galleryTitle'>
          <label>{galleryTitle}</label>
        </div>
      </div>
    </Link>
  )
}
