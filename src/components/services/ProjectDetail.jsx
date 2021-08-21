import React from 'react'
import { Link } from 'react-router-dom'
export default function ProjectDetail({ id, ProjectTitle, ProjectTitleImage }) {
  const url = ProjectTitleImage.url
  return (
    <>
      <Link exact to={`/data/${id}`}>
        <div className='imgContainers'>
          <div className='imgGridDiv'>
            <img src={url} alt={ProjectTitle} />
          </div>
          <div className='titleGridDiv'>
            <h3>{ProjectTitle}</h3>
          </div>
        </div>
      </Link>
    </>
  )
}
