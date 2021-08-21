import React from 'react'
import Aos from 'aos'
import mainLogo from '../assets/mainLogo.svg'
import cancelIcon from '../assets/Icons/cancel.svg'
export default function ContactForm() {
  const [submited, setSubmited] = React.useState(false)
  React.useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <div className={submited ? 'backdropiFrame' : 'iframeNone'}>
        <div className='iframeContactForm'>
          <span
            onClick={() => {
              setSubmited(false)
            }}
          >
            <img src={cancelIcon} alt='cancel icon' />
          </span>
          <h3>
            Your form has been send to us, we will contact you as soon as
            possible...
          </h3>
        </div>
      </div>
      <section className='contact'>
        <iframe
          style={{ display: 'none' }}
          name='hidden_iframe'
          id='hidden_iframe'
        ></iframe>
        <form
          data-aos='fade-right'
          action='https://docs.google.com/forms/u/1/d/e/1FAIpQLScrf8qmAjN4uE5RCtC14QQnNFt-b6iVefxvNRN0HFjMWT0qTg/formResponse'
          method='post'
          target='hidden_iframe'
          onSubmit={() => {
            setSubmited(true)
          }}
          className='contactForm'
        >
          <h2>Contact Us For Free Consultancy</h2>
          <hr />
          <div className='columnGroup'>
            <div className='inputsGroup'>
              <input
                type='text'
                name='entry.444946300'
                placeholder='Full Name'
                required
                className='textBox'
              />
              <label className='textLabel'>Full Name</label>
            </div>
            <div className='inputsGroup'>
              <input
                type='email'
                name='entry.1875694213'
                placeholder='Email Address'
                required
                className='textBox'
              />
              <label className='textLabel'>Email Address</label>
            </div>
            <div className='inputsGroup'>
              <input
                type='tel'
                name='entry.976382535'
                placeholder='Phone Number'
                className='textBox'
              />
              <label className='textLabel'>Phone Number</label>
            </div>
            <div className='inputsGroup'>
              <textarea
                rows='3'
                name='entry.1683152162'
                className='textBox'
                placeholder='Enter your message here...'
              ></textarea>
              <label className='textLabel'>Message</label>
            </div>
            <div className='inputsCheck'>
              <label>Select your Options: </label>
              <div className='checkboxButtons'>
                <div className='flexwrap'>
                  <input
                    type='checkbox'
                    id='checkboxLogo'
                    name='entry.207565163'
                    value='Logo Design'
                  />
                  <label htmlFor='checkboxLogo'>Logo Design</label>
                </div>
                <div className='flexwrap'>
                  <input
                    type='checkbox'
                    id='checkboxdigital'
                    name='entry.207565163'
                    value='Digital Art'
                  />
                  <label htmlFor='checkboxdigital'>Digital Art</label>
                </div>
                <div className='flexwrap'>
                  <input
                    type='checkbox'
                    id='checkboxUiUxMobile'
                    name='entry.207565163'
                    value='Ui Ux Mobile'
                  />
                  <label htmlFor='checkboxUiUxMobile'>Ui Ux Mobile</label>
                </div>
                <div className='flexwrap'>
                  <input
                    type='checkbox'
                    id='checkboxUiUxWebsite'
                    name='entry.207565163'
                    value='UiUx WebSite'
                  />
                  <label htmlFor='checkboxUiUxWebsite'>Ui Ux Website</label>
                </div>
                <div className='flexwrap'>
                  <input
                    type='checkbox'
                    id='checkboxWebsites'
                    name='entry.207565163'
                    value='WebSite'
                  />
                  <label htmlFor='checkboxWebsites'>Websites</label>
                </div>
                <div className='flexwrap'>
                  <input
                    type='checkbox'
                    id='checkboxwordpress'
                    name='entry.207565163'
                    value='Wordpress'
                  />
                  <label htmlFor='checkboxwordpress'>WordPress</label>
                </div>
              </div>
            </div>
          </div>
          <button type='submit' className='formBtn'>
            SUBMIT
          </button>
        </form>

        <div data-aos='fade-left' className='imageSection'>
          <img src={mainLogo} alt='mainArtPartLogo' />
        </div>
      </section>
    </>
  )
}
