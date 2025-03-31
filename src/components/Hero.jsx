import React from 'react'
import img from '../asstes/profile.png'; 
import './Hero.css';
import { motion } from "motion/react"

function Hero() {
  return (
    <div className=' flex flex-col-reverse items-center  mt-10   lg:mt-0 lg:flex-row  text-neutral-50   w-full  lg:p-20  lg:pl-28'>
   <div className="col-1 w-full  mt-6 flex flex-col justify-evenly items-center  lg:items-start   p-3     lg:w-1/2 font-tittle  text-left" >
    <motion.h1  initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.8,delay:1}}
    className=' text-4xl   mt-4  lg:text-8xl  font-thin font-sans'>Velu Samy</motion.h1>
    <motion.h3  initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.8,delay:1.5}}
 className="text-3xl  lg:text-4xl  bg-gradient-to-r ml-2 mt-4 from-purple-500 to-pink-500 text-transparent bg-clip-text">
  Full Stack Developer
</motion.h3>
    <motion.p  initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.8,delay:2}}     
    className='mt-2 mx-2 text-base  lg:text-start text-center mt-5 '>Designing responsive websites that prioritize user-friendliness. Dedicated to crafting seamless, intuitive experiences across all devices.</motion.p>
   </div>
   <div className="img-container   col-2 w-1/2 flex justify-center items-center border-solid border-white">
   <motion.div  initial={{x:100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.8,delay:2.5}}   className="img-containerfor">
   <img   
     className='w-80 '  src={img} alt="" />
     </motion.div>
   </div>
   </div>
  
  )
}

export default Hero
