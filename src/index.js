import React from 'react'
import ReactDOM from 'react-dom'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import App from './App'
import { GalleryProvider } from './context/gallery'

ReactDOM.render(
  <GalleryProvider>
    <App />
  </GalleryProvider>,

  document.getElementById('root')
)
