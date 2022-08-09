import './App.css'
import About from './components/about-section/About'
import Applink from './components/app-link-section/Applink'
import Hero from './components/hero-section/Hero'
import Navbar from './components/navbar-section/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Applink />
    </div>
  )
}

export default App
