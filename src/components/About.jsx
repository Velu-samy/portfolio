
import React from 'react'
import {motion} from 'motion/react'
import img from '../asstes/profile.png';
import illu from '../asstes/illustrations.png';

function About() {
  return (
    <div className='about-cont  font-tittle text-neutral-200 mt-32'>
        <motion.h1 whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:-50}}
    transition={{duration:0.8,delay:0.3}} className='text-center text-5xl text-neutral-400 '> About </motion.h1>
      <div className="row flex  flex-col  lg:flex-row  justify-center  items-center  lg:p-20 " >
        <div className="col-1   w-full   lg:w-1/2 flex justify-center">
          <motion.img   whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.8, delay:0.5}}     src={illu}  className='w-64  lg:w-80  mt-10  '    alt="" />
        </div>
        <div className="col-2   w-full  lg:w-1/2 flex justify-center mt-5 lg:p-4">
        < motion.p whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:100}}
    transition={{duration:1.2,delay:0.5}}  className=' p-4   text-center  lg:text-left   text-lg  text-neutral-200'>
Hi, I'm Velusamy, a full-stack developer with a specialization in front-end development. I have a passion for creating user-friendly and visually appealing websites. I am committed to continuously improving my skills and staying updated with the latest technologies to enhance my knowledge and abilities. Currently, I am focused on designing and developing web applications that are both functional and engaging. I am excited to grow and contribute to innovative projects in the tech world!
</motion.p>        </div>
      </div>
    </div>
  )
}

export default About
