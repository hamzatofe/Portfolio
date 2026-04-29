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


  return (
    <header className=' flex '>
      <button className='menu' onClick={() => { setshowModal(true) }}><IoMdMenu /></button>
      <div /> 
      
      <nav>
        <ul>
          <ul className='flex'>
            <li><a href="1">About</a></li>
            <li><a href="1">Articals</a></li>
            <li><a href="1">Prjects</a></li>
            <li><a href="1">Speaking</a></li>
            <li><a href="1">Contact</a></li>
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
                <li ><button className='close' onClick={() => { setshowModal(false) }}><IoMdClose /></button></li>
                <li><a href="">About</a></li>
                <li><a href="">Articals</a></li>
                <li><a href="">Prjects</a></li>
                <li><a href="">Speaking</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            
          </div>
      )}

    </header>
  )
}

export default Header