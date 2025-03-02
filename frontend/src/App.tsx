import './App.css'
import NavBar from './components/nav-bar/nav-bar'
import Footer from './components/footer/footer'
import Container from './components/container/container'

function App() {

  return (
    <div className="main-container h-full w-full">
    <NavBar/>
    <Container/>
    <Footer/>
    </div>
  )
}

export default App
