import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import pages
import Home from './pages/Home'
import Error from './pages/Error'
import Gallery from './pages/Gallery'
import Aboutus from './pages/Aboutus'
import ProjectItem from './pages/ProjectItem'
import SingleGalleryItem from './pages/SingleGalleryItem'
import { GalleryContext } from './context/gallery'
//import components
import SplashScreen from './components/SplashScreen'
import SideBar from './components/SideBar'
import Header from './components/header'
import SocialIcon from './components/socialIcon'
import ScrollButton from './components/ScrollButton'
import Scrolldown from './components/Scrolldown'

function App() {
  const { loading } = React.useContext(GalleryContext)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (seconds <= 6 || loading === true) {
    return <SplashScreen />
  } else {
    return (
      <Router>
        <SideBar />
        <Header />
        <ScrollButton />
        <Switch>
          <Route exact={true} path='/'>
            <Scrolldown />
            <SocialIcon />
            <Home />
          </Route>
          <Route exact={true} path='/gallery'>
            <Gallery />
          </Route>
          <Route exact={true} path='/aboutus'>
            <SocialIcon />
            <Aboutus />
          </Route>
          <Route exact path='/gallery/:ProjectItems'>
            <ProjectItem />
          </Route>
          <Route path='/data/:id'>
            <Scrolldown />
            <SingleGalleryItem />
          </Route>
          <Route exact path='/*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
