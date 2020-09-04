import React from 'react'
import Header from './Header'
import Nav from './Nav'
import About from './About'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <About />
      </div>
    )
  }
}

export default App
