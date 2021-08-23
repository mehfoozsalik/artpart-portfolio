import React from 'react'
import { Link } from 'react-router-dom'
export default function ListofItems({ Image, galleryTitle }) {
  const url = Image.url

  return (
    <Link to={`/gallery/${galleryTitle}`}>
      <div className='galleryItems'>
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
