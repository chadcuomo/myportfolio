import React from 'react'
import Header from './Header'
import Nav from './Nav'
import About from './About'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    )
  }
}

export default App
