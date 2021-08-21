import React, { useState } from 'react'
import ProjectDetail from './ProjectDetail'
import NotFound from '../NotFound'
import Loading from '../Loading'
import Paginate from './Paginate'

function DetailGallery({ galleryTitle, Description }) {
  return (
    <div className='galleryText'>
      <h1 className='galeryTextMargin'>{galleryTitle} gallery</h1>
      <h3>{Description}</h3>
    </div>
  )
}

export default function SingleData({ galleryTitle, Description, projects }) {
  const [projectPerPage] = useState(6)

  const [currentPage, setCurrentPage] = useState(1)

  /// geting current post
  const indexOfLastProject = currentPage * projectPerPage
  const indexOfFirstProject = indexOfLastProject - projectPerPage
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  )

  ///Changing pages here

  const pagination = (pageNumber) => setCurrentPage(pageNumber)
  const backward = () => setCurrentPage(currentPage - 1)
  const forward = () => setCurrentPage(currentPage + 1)

  if (projects.length < 1) {
    return (
      <div className='NotFoundPage'>
        <DetailGallery galleryTitle={galleryTitle} Description={Description} />
        <NotFound />
      </div>
    )
  } else {
    return projects.length === 0 ? (
      <Loading />
    ) : (
      <>
        <DetailGallery galleryTitle={galleryTitle} Description={Description} />
        <div className='tabdata'>
          {currentProjects.map((sub) => {
            return <ProjectDetail key={sub.id} {...sub} />
          })}
        </div>
        <Paginate
          projectPerPage={projectPerPage}
          totalProjects={projects.length}
          backward={backward}
          forward={forward}
          pagination={pagination}
          page={currentPage}
        />
      </>
    )
  }
}
