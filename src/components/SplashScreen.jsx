import React from 'react'
import big from '../assets/splashScreenIcons/BigFurr.svg'
import small from '../assets/splashScreenIcons/SmallFurr.svg'

function SplashScreen(props) {
  return (
    <div className='SplashScreenDiv'>
      <img src={big} alt='mainlogo image splash' className='big ' />
      <img src={small} alt='mainlogo image splash' className='small' />
    </div>
  )
}

export default SplashScreen
