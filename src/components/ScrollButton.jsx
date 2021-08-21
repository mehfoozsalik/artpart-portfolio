import React from 'react'
import { GalleryContext } from '../context/gallery'
import backtotop from '../assets/backtotop.svg'

function ScrollButton() {
  const { height } = React.useContext(GalleryContext)
  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <button
      className={height > 20 ? 'scroll-btn show-scroll-btn' : 'scroll-btn'}
      onClick={scrollBackToTop}
    >
      <img src={backtotop} alt='backtotop' />
    </button>
  )
}

export default ScrollButton
