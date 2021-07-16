import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
// import { Services } from './components/services'

import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import What from './components/What'
import Works from './components/works'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Works />
      
      <What />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      {/* <Services data={landingPageData.Services} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
