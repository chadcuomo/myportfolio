import React from 'react'
import Header from './Header'
import Nav from './Nav'
import About from './About'
import Portfolio from './Portfolio'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <About />
        <Portfolio />
      </div>
    )
  }
}

export default App
