import { useState } from 'react'
import { useEffect } from 'react'
import './Header.css'
import { IoMoonOutline } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import { IoSunnyOutline } from 'react-icons/io5';

const Header = () => {
const [showModal, setshowModal] = useState(false);
const [them, setThem] = useState(
  () => localStorage.getItem('currentMood') ?? 'dark'
)

useEffect(() => {
  if (them === 'light') {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }

 
}, [them])

const closeMenu = () => setshowModal(false);


  return (
    <header className=' flex '>
      <button className='menu' onClick={() => { setshowModal(true) }}><IoMdMenu /></button>
      <div /> 
      
      <nav>
        <ul>
          <ul className='flex'>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Articles</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Speaking</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </ul>
      </nav>

      <button onClick={() => { 
        localStorage.setItem('currentMood', them === 'dark' ? 'light' : 'dark')

        setThem(localStorage.getItem('currentMood'))

       }} className='moon flex'>
        {them === 'dark' ? (<IoMoonOutline />) : (<IoSunnyOutline className='sun' />)}
       </button>


      {showModal && (
              <div className=' fixed'>
        
              <ul className='modal '>
                <li ><button className='close' onClick={closeMenu}><IoMdClose /></button></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#projects" onClick={closeMenu}>Articles</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMenu}>Speaking</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
              </ul>
            
          </div>
      )}

    </header>
  )
}

export default Header