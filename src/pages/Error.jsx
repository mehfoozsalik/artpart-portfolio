import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! "Page not Found"</h1>
        <div>
          <Link to='/' className='btn'>
            Back Home
          </Link>
        </div>
      </div>
    </section>
  )
}
