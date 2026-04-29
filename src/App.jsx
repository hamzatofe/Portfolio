import { useEffect, useState } from "react"
import { Header, Hero, Main, Contact, Footer  } from "./components/index"
import { IoArrowUp } from 'react-icons/io5'
import "./App.css"

const App = () => {

  const [showBtn, setShowBtn] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    });
  
  }, []);
  
  
  
  return (
    
    <div id="up" className="container">
      <Header />
      
      <Hero />
      <div className="divider"/>
      <Main />
      <div className="divider"/>
      <Contact />
      <div className="divider"/>
      <Footer />
      
      <a className="" href="#up" style={{opacity: showBtn ? 1 : 0, transition: '0.5s'}}>
         <button className='scroll'><IoArrowUp /></button>
       </a>
    </div>
  )
}

export default App