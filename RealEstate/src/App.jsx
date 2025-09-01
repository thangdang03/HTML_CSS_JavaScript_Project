import Header from './components/Header'
import Hero from './components/Hero'
import Residencies from './components/Residencies'
import Value from './components/Value'
import Contact from './components/Contact'
import Start from './components/Started'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <>
        <main>
          <div className="config">
            <Header></Header>
            <Hero></Hero>
          </div>
          <Residencies></Residencies>
          <Value></Value>
          <Contact></Contact>
          <Start></Start>
          <Footer></Footer>
        </main>
        
    </>
  )
}

export default App
