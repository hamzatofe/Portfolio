import './Hero.css'
import { MdVerified } from 'react-icons/md'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import avatar from '../../../public/1.jpg'

import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import developer from '../Animation/developer.json'

const Hero = () => {

  const animationRef = useRef(null)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: developer,
    })

    return () => anim.destroy() // تنظيف عند الخروج
  }, [])

  return (
    <section className='hero flex'>
      <div className="left-section ">
        <div className="parent-avatar">
          <motion.img 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.7}}
            src={avatar}
            alt=""
            className='avatar'
          />
          <MdVerified className='verified' />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, 20] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='title'>
          Computer engineer, software designer, founder.
        </motion.h1>

        <p className='sub-title'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </p>

        <div className="icons flex">
          <FaTwitter className='icon'/>
          <FaInstagram className='icon'/>
          <FaGithub className='icon'/>
          <FaLinkedin className='icon'/>
        </div>
      </div>

      <div className="right-section animation">
        {/* هنا Lottie */}
        <div
          ref={animationRef}
          className="developer"
          style={{ width: 400, height: 400 }}
        />
      </div>
    </section>
  )
}

export default Hero
