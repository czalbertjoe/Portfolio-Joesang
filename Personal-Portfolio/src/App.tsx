import { useState } from 'react'
import './App.css'
import image from './assets/img/download.jpg'
import Footer from './Components/footer'
import Header from './Components/header'
import Navbar from './Components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <Navbar></Navbar>
      </nav>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={image} className="logo" alt="logo" />
        </a>
      </div>
      <div>
        <Header></Header>

      </div>
      <h1>Welcome to my Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Ver {count}
        </button>

      </div>
      <p className="read-the-docs">
        Created June-2023
        <Footer></Footer>
      </p>
    </div>
  )
}

export default App
