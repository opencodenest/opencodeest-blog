import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/nav-bar/nav-bar'
import Container from './components/container/container'

function App() {

  return (
    <div className="main-container">
    <NavBar/>
    <Container/>
    {/* <h1>hello</h1> */}
    </div>
  )
}

export default App
