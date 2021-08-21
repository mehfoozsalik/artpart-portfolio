import React from 'react'
import ListofItems from './ListofItems'
import { GalleryContext } from '../context/gallery'
import Loading from './Loading'

export default function Galleries() {
  const { loading, gallery, updateDisplay } = React.useContext(GalleryContext)

  return (
    <>
      <section className='gallerySection'>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className='galleryText'>
              <h1>Welcome to my gallery</h1>
              <h3>
                check out our work style and quality on different project, our
                quality never gets compromise.
              </h3>
            </div>
            <div onClick={() => updateDisplay()}>
              <div className='galleryContainers'>
                {gallery.map((list) => {
                  return <ListofItems key={list.id} {...list} />
                })}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  )
}
