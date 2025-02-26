import BlogContainer from '../blog-container/blog-container'
import BlogListContainer from '../blog-list-container/blog-list-container';
import './container.css'
import { useState } from 'react'

function Container() {
  let test = {
    title:"Understanding TypeScript: A Beginner's Guide",
    author:"Harshith vs",
    readTime:"3 min read",
    date:"Sep 28, 2026",
    content: `
    <img src='https://respected-warmth-1fd8bc18e3.media.strapiapp.com/jwt_authentication_go_1f232b5340.png'></img>
    <p>TypeScript has become an essential tool for modern web development, providing type safety and improved developer experience.</p>
    <h2>What is TypeScript?</h2>
    <p>TypeScript is a superset of JavaScript that adds static typing. It helps developers catch errors early and makes code more maintainable.</p>
  
    <h3>Why Use TypeScript?</h3>
    <ul>
      <li><strong>Type Safety:</strong> Catches errors at compile time.</li>
      <li><strong>Better Code Completion:</strong> Provides better IntelliSense in IDEs.</li>
      <li><strong>Scalability:</strong> Ideal for large applications.</li>
    </ul>
  
    <h3>Getting Started</h3>
    <p>To install TypeScript, run the following command:</p>
    <pre><code class="language-bash">npm install -g typescript</code></pre>
  
    <h3>Example Code</h3>
    <p>Here’s a simple TypeScript function:</p>

    <pre><code class="language-python">def greet(name: str) -> str:
        return f"Hello, {name}!"</code></pre>
    
    <h3>Conclusion</h3>
    <p>By using TypeScript, you can write more robust and maintainable JavaScript applications.</p>
  `
  };
  return (
    <div className="flex justify-center h-full w-full">
      {/* <BlogContainer {... test}/> */}
      <BlogListContainer/>
    </div>
  )
}

export default Container
