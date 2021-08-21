import React from 'react'
import { GalleryContext } from '../context/gallery'

function Scrolldown() {
  const { height } = React.useContext(GalleryContext)

  return (
    <div className={height <= 0 ? 'scrollsug show-scrollsug' : ' scrollsug'}>
      <div className='scrollDiv'>
        <div className='flexTDiv'>
          <h3>scroll down</h3>
        </div>
        <div className='flexCdiv'>
          <span className='arrow-down first'></span>
          <span className='arrow-down second'></span>
          <span className='arrow-down third'></span>
          <span className='arrow-down fourth'></span>
        </div>
      </div>
    </div>
  )
}

export default Scrolldown
