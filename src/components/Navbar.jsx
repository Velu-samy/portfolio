import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import {motion} from 'motion/react'

function Navbar() {
  return (
    <div>
      <div className="navbarconatiner flex justify-between items-center p-10 text-neutral-200" >
        <motion.h1  initial={{y:-100,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.8,delay:0.2}}  className='font-tittle text-3xl text-purple-500 lg:text-5xl'>V<span className='text-pink-500'>S</span></motion.h1>
       <motion.div  initial={{y:-100,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.8,delay:0.2}}  className="icon-container flex justify-evenly  text-neutral-300 text-2xl  lg:text-3xl ">
       <a href="https://www.linkedin.com/in/velusamy--m/"  rel="noopener noreferrer" className='m-2 hover:text-purple-500'>
       <FaLinkedin  />
      </a>
      <a href="https://www.instagram.com/itsvetri__?igsh=YnYxd3Q2Nno3ZHQx&utm_source=qr" target="_blank" rel="noopener noreferrer" className='m-2  hover:text-slate-500 '>
        <FaInstagram />
      </a>
      <a href="https://github.com/Velu-samy"  rel="noopener noreferrer" className='m-2  hover:text-pink-500'>
        <FaGithub />
      </a>
       </motion.div>
      </div>
    </div>
  )
}

export default Navbar
