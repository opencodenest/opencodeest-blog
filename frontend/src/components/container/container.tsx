import BlogContainer from '../blog-container/blog-container'
import './container.css'
import { useState } from 'react'

function Container() {
  let test = {
    title:"The Power of WebAssembly: Unlocking Native Performance on the Web",
    author:"Harshith vs",
    readTime:"3 min read",
    date:"Sep 28, 2024",
    content: `<h3>Introduction</h3>
              <p>Python has evolved significantly over the years, yet many developers still write code like it’s 2009. Let’s explore modern best practices.</p>
              <h3>Use Virtual Environments</h3>
              <p>Instead of polluting your global Python installation, always use <code>venv</code> or <code>pipenv</code> to manage dependencies.</p>
              <h3>Type Hinting</h3>
              <p>Take advantage of Python’s type hints to make your code more readable and maintainable:</p><br>`
  };
  return (
    <div className="flex justify-center h-full w-full">
      <BlogContainer {... test}/>
    </div>
  )
}

export default Container
