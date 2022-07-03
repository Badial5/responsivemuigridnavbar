import React from 'react'
import Navbar from './components/Navbar/navbar.component'

const linksArray = ["Products", "Services",
"Overview", "Contact Us"];

const App = () => {
  return (
    <div>
      <Navbar links={linksArray} />
    </div>
  )
}

export default App
