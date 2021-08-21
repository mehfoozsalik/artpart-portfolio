import React, { useState } from 'react'
import axios from 'axios'
import url from '../utilities/URL'

const GalleryContext = React.createContext()

function GalleryProvider({ children }) {
  const [display, setDisplay] = useState('')
  const [project, setProject] = useState([])
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    setLoading(true)
    axios.get(`${url}/Galleries`).then((response) => {
      setGallery(response.data)
      setLoading(false)
    })
    axios.get(`${url}/Projects`).then((response) => {
      setProject(response.data)
      setLoading(false)
    })
    return () => {}
  }, [])

  const [height, setHeight] = React.useState(0)
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset)
    })
    return () => window.removeEventListener('scroll', () => {})
  })

  function updateDisplay(display) {
    setDisplay(' slideUp')
  }

  return (
    <GalleryContext.Provider
      value={{
        loading,
        display,
        height,
        gallery,
        project,
        updateDisplay,
      }}
    >
      {children}
    </GalleryContext.Provider>
  )
}
export { GalleryProvider, GalleryContext }
