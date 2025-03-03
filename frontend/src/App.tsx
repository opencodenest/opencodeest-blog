import './App.css'
import NavBar from './components/nav-bar/nav-bar'
import Footer from './components/footer/footer'
import BlogListContainer from './components/blog-list-container/blog-list-container'
import BlogContainer from './components/blog-container/blog-container'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="main-container min-h-screen flex flex-col w-full">
    <NavBar/>
    <div className="flex justify-center h-full w-full overflow-auto flex-grow">
    <Router>
      <Routes>
        <Route path="/blog" element={<BlogListContainer />} />
        <Route path="/blog/:slug" element={<BlogContainer />} />
      </Routes>
    </Router>
        </div>
    <Footer/>
    </div>
  )
}

export default App
