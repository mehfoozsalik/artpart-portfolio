import React from 'react'
import ContactForm from '../components/contactForm'
export default function Aboutus() {
  return (
    <section className='aboutUsSection'>
      <div className='aboutusDiv'>
        <h1>About Us</h1>
        <p>
          Established in 2016, The Website Design Company is a professional
          website development hosting and design company with an office in
          Abbottabad. This studio with professional staff will work with you
          every step of the way, from the FREE initial consultation to the
          finished product. Your new website can inform, educate, sell,
          advertise and serve your current customers and, best of all, introduce
          your business to new contacts worldwide. We’ve provided information
          here that may help you better understand the procedure of developing
          and designing a website, will rank well on Google and will take your
          business, product or service to a whole new level.
          <br />
          “To strive to design websites that are engaging, effective and that
          rank well on Google. We will strive to provide effective online
          marketing strategies to our customers by remaining expert in cutting
          edge, effective online marketing techniques. We will constantly
          explore and utilize online marketing strategies that are relatively
          low cost and effective for our customers. We will remain an ethical
          company and will strive to provide real value to our customers.”
        </p>
      </div>
      <div className='quotation'>
        <h2>
          We are developing digital products that increase productivity and
          solve problems.
        </h2>
        <h3>
          We specialize in building custom websites with WOW factor. We will
          build you an engaging, professional, search engine ready and
          easy-to-use website that portrays your business or product in the best
          possible light. Your website will be fully responsive for mobile and
          easily updated by you.
        </h3>
      </div>

      <ContactForm />
    </section>
  )
}
