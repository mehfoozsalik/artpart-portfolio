import React from 'react'
import Singlebody from './Singlebody'
import { GalleryContext } from '../context/gallery'

export default function Body() {
  const { gallery } = React.useContext(GalleryContext)
  return (
    <>
      <div className='main-bodySpace'></div>
      <section className='bodyContainer'>
        {gallery.map((list) => {
          return <Singlebody key={list.id} {...list} />
        })}
      </section>
    </>
  )
}
