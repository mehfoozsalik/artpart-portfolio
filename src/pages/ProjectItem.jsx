import React from 'react'
import { GalleryContext } from '../context/gallery'
import { useParams, useHistory } from 'react-router'
import Loading from '../components/Loading'
import SingleData from '../components/services/singleData'
import back from '../assets/Icons/back.svg'

function ProjectItem() {
  const { gallery, loading } = React.useContext(GalleryContext)
  const history = useHistory()
  const { ProjectItems } = useParams()
  const newData = gallery.filter((current) => {
    return current.galleryTitle === ProjectItems
  })
  return loading ? (
    <Loading />
  ) : (
    <>
      <section className='projectDataContainer'>
        <button className='back' onClick={history.goBack}>
          <img src={back} alt='back icon' />
        </button>
        {newData.map((items) => {
          return <SingleData key={items.id} {...items} />
        })}
      </section>
    </>
  )
}

export default ProjectItem
