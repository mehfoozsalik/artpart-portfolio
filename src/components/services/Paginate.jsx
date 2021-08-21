import React from 'react'
import next from '../../assets/Icons/Next.svg'
import prev from '../../assets/Icons/Prev.svg'

function Paginate({
  projectPerPage,
  totalProjects,
  backward,
  forward,
  pagination,
  page,
}) {
  const numberOfPages = Math.ceil(totalProjects / projectPerPage)
  const pageNumbers = []
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className='pagination'>
      {page > 1 && (
        <button onClick={() => backward()} className='pagebutton'>
          <img src={prev} alt='previous button' />
        </button>
      )}

      {pageNumbers.map((number) => (
        <li key={number} className='page-item'>
          <button onClick={() => pagination(number)} className='pagebutton'>
            {number}
          </button>
        </li>
      ))}
      {page < numberOfPages && (
        <button onClick={() => forward()} className='pagebutton'>
          <img src={next} alt='next button' />
        </button>
      )}
    </ul>
  )
}

export default Paginate
