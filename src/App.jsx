import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar />
      <section className='section-header'>
        <h4>Hi, my name is</h4>
        <h1>Fahim Imtiaz</h1>
        <h1>I build things for the web</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Consequat ultrices enim bibendum ipsum vel neque dui facilisis quis. In leo adipiscing tortor elementum purus vita e venenatis.</p>
        <button className='btn-primary'>View resume</button>
      </section>
    </div>
  )
}

export default App
