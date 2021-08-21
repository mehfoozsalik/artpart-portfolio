import React from 'react'

import Background from '../components/background'
import Body from '../components/body'
import ContactForm from '../components/contactForm'
import Footer from '../components/footer'

function Home() {
  return (
    <div className='mainBody'>
      <Background />
      <Body />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
