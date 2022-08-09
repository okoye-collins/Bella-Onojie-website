import './App.css'
import About from './components/about-section/About'
import Applink from './components/app-link-section/Applink'
import Footer from './components/footer/Footer'
import Hero from './components/hero-section/Hero'
import Navbar from './components/navbar-section/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Applink />
      <Footer />
    </div>
  )
}

export default App
