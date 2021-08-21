import React from 'react'
import Singlebody from './Singlebody'
import Loading from './Loading'
import { GalleryContext } from '../context/gallery'

export default function Body() {
  const { loading, gallery } = React.useContext(GalleryContext)
  if (loading) {
    return <Loading />
  } else {
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
}
