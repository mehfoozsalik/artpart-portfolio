import React from 'react'
import Aos from 'aos'

///import Images
import gmailImage from '../assets/iconsfooter/email.svg'
import whatsApp from '../assets/iconsfooter/whatsapp.svg'
import navigator from '../assets/iconsfooter/location.svg'
import logofooter from '../assets/logo.svg'

//connect logos
import Pinerest2 from '../assets/Pinerest2.svg'
import twiter2 from '../assets/twiter2.svg'
import instagram2 from '../assets/instagram2.svg'
import dribble from '../assets/dribble.svg'
import behance2 from '../assets/behance2.svg'

export default function Footer() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <footer className='bottomSectionFooter'>
      <div data-aos='slide-right'>
        <div className='contactDiv'>
          <i>
            <img src={gmailImage} alt='gmail Icon' />
          </i>
          <span>mehfooz.salik@gmail.com</span>
        </div>
        <div className='contactDiv'>
          <i>
            <img src={whatsApp} alt='whatsapp Icon' />
          </i>
          <span>+92 (316) 7459 279</span>
        </div>
        <div className='contactDiv'>
          <i>
            <img src={navigator} alt='navigator Icon' />
          </i>
          <span>Jhangi saydan road near Alied bank ATD</span>
        </div>
      </div>
      <div data-aos='slide-up' className='footerLogoSection'>
        <img src={logofooter} alt='logo footer' />
      </div>
      <div data-aos='slide-left' className='logoContainersDiv'>
        <h2>Connect with us</h2>
        <div className='logocontainers'>
          <a href='https://twitter.com/art_part_art' target='blank'>
            <img src={twiter2} alt='twitter logo' />
          </a>
          <a href='https://www.pinterest.com/artpartfolio' target='blank'>
            <img src={Pinerest2} alt='twitter logo' />
          </a>
          <a href='https://www.instagram.com/artpartfolio/' target='blank'>
            <img src={instagram2} alt='twitter logo' />
          </a>
          <a href='https://dribbble.com/artpartfolio' target='blank'>
            <img src={dribble} alt='twitter logo' />
          </a>
          <a href='https://www.behance.net/mehfoozsalik1' target='blank'>
            <img src={behance2} alt='twitter logo' />
          </a>
        </div>
      </div>
    </footer>
  )
}
