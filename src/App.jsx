import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navbar'>
        <div className='logo'></div>
        <div className='main-nav'>
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
      <section className='section-header'>
        <h4>Hi, my name is</h4>
        <h1>Fahim Imtiaz</h1>
        <h1>I build things for the web</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Consequat ultrices enim bibendum ipsum vel neque dui facilisis quis. In leo adipiscing tortor elementum purus vita e venenatis.</p>
        <button className='btn-primary'></button>
      </section>
    </>
  )
}

export default App
