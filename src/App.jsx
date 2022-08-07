import './App.css'
import About from './components/about-section/About'
import Hero from './components/hero-section/Hero'
import Navbar from './components/navbar-section/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
