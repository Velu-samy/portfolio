import React from 'react'
import { motion } from "motion/react"
import atm from '../asstes/python.jpg';
import ticket from '../asstes/ticket.jpg';
import cs from '../asstes/cw.png';
import car from '../asstes/car.png';
const Projects = () => {
  return (
    <div className='mb-10'>
      <motion.h2 whileInView={{opacity:1,y:0}} 
              initial={{opacity:0,y:-50}}
          transition={{duration:0.8,delay:0.4}}  className='text-center  font-tittle  text-5xl mt-4 text-neutral-400  '>Projects</motion.h2>
      <div className="row flex flex-col p-5  lg:flex-row  mt-10 mb-8  lg:px-40 font-tittle text-neutral-100 items-center">
        < motion.div whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:-100}}
          transition={{duration:0.8,delay:0.6}} className="col-1 w-full    lg:w-1/2 flex  lg:justify-center">
          <img src={atm}   alt="" className='w-80 rounded-md border border-transparent hover:border-purple-500' />
        </motion.div>
        < motion.div whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:100}}
          transition={{duration:0.8,delay:0.6}}      className="col-2  w-full lg:w-1/2  mt-3 lg:mt-0 ">
        <h2 className='font-semibold mb-1'>Keylogger Detection Tool
        </h2>
        <ul className='list-disc  font-sans font-thin text-sm mt-1' >
       
            <li>A Python program to monitor system processes, identify suspicious activity, and alert users to potential keylogging threats. Simple, effective, and protective
            </li>
        </ul>
        <div className="tech-con flex  justify-start mt-3 flex-wrap gap-2 opacity-70">
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'> Python</p>
          <p className='mr-3 rounded-sm  border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>CryptoGraphy</p>
        </div>
        <div className="button-container flex lg:justify-start mt-4 justify-between  lg:gap-80">
         <a href="https://github.com/Velu-samy/Velusamy-" className='px-4 py-1 border border-pink-500'>GitHub</a>

        </div>
        </motion.div>
      </div>
      <div className="row flex  flex-col  lg:flex-row p-5  lg:px-40 font-tittle text-neutral-100 mt-5 items-center">
        <motion.div   whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:-100}}
          transition={{duration:0.8,delay:0.6}}    className="col-1 w-full  lg:w-1/2 flex  lg:justify-center">
          <img  className='w-80 rounded-md border border-transparent hover:border-purple-500' src={cs} alt="" />
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:100}}
          transition={{duration:0.8,delay:0.6}}         className="col-2 w-full  lg:w-1/2  mt-3 lg:mt-0">
        <h2 className='font-semibold mb-1'>Coffee Shop Website</h2>
         
            <ul className='list-disc  font-sans font-thin text-sm mt-1' ><li>
                
            Developed a feature-rich coffee shop website with secure user registration and login functionalities, alongside an engaging, interactive interface to showcase coffee products with detailed descriptions.

                </li>
                <li>Implemented responsive design for seamless compatibility across devices and efficient management of user data and product inventory to ensure smooth operations.</li>
                
                </ul>

<div className="tech-con flex  justify-start mt-3 flex-wrap gap-2 opacity-70">
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>HTML</p>
          <p className='mr-3 rounded-sm  border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>CSS</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'> Javascript</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>PHP</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>Mysql Database</p>

        </div>
        <div className="button-container flex lg:justify-start mt-4 justify-between  lg:gap-80">
         <a href="https://github.com/Velu-samy/Bean-heaven" className='px-4 py-1 border border-pink-500'>GitHub</a>
         <a href="https://beanheavencoffeeshop.ct.ws/?i=1" className='px-4 py-1 border border-pink-500'>Live</a>
        </div>
        </motion.div>
      </div>
      <div className="row flex  flex-col  lg:flex-row p-5  lg:px-40 font-tittle text-neutral-100 mt-5 items-center">
        <motion.div whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:-100}}
          transition={{duration:0.8,delay:0.6}}     className="col-1 w-full  lg:w-1/2 flex  lg:justify-center">
            <img src={ticket} className='rounded-md w-80 border border-transparent hover:border-purple-500' alt="" />
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:100}}
          transition={{duration:0.8,delay:0.6}}      className="col-2 w-full  lg:w-1/2  mt-3 lg:mt-0">
        <h2 className='font-semibold mb-1'>ONLINE BOOKING SYSTEM CONSOLE APPLICATION </h2>
         
            <ul className='list-disc  font-sans font-thin text-sm mt-1' >
                
<li>Designed and developed a Java-based console application integrated with a MySQL database. The system enables users to securely book tickets, view reviews, and generate PDFs for their booked tickets.</li>
                <li>Implemented admin capabilities for efficiently managing movies, user accounts, and ticket inventories.</li>
                </ul>

<div className="tech-con flex  justify-start mt-3 flex-wrap gap-2 opacity-70">
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>Java</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>Mysql Database</p>

        </div>
        <div className="button-container flex lg:justify-start mt-4 justify-between  lg:gap-80">
         <a href="https://github.com/Velu-samy/MoviebookingSystem" className='px-4 py-1 border border-pink-500'>GitHub</a>
        </div>
        </motion.div>
      </div>
      <div className="row flex  flex-col  lg:flex-row p-5  lg:px-40 font-tittle text-neutral-100 mt-5 items-center">
        <motion.div whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:-100}}
          transition={{duration:0.8,delay:0.6}}     className="col-1 w-full  lg:w-1/2 flex  lg:justify-center">
            <img src={car} className='rounded-md w-80 border border-transparent hover:border-purple-500' alt="" />
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:100}}
          transition={{duration:0.8,delay:0.6}}      className="col-2 w-full  lg:w-1/2  mt-3 lg:mt-0">
        <h2 className='font-semibold mb-1'>Luxedrive - A Car Sales Website</h2>
         
            <ul className='list-disc  font-sans font-thin text-sm mt-1' >
  <li>Developed <strong>Luxedrive</strong>, a multi-page car sales website using <strong>React</strong> and <strong>Framer Motion</strong>.</li>
  <li>Implemented responsive design with advanced <strong>React</strong> concepts.</li>
  <li>Created a modern platform with smooth animations and user-friendly features.</li>
</ul>

<div className="tech-con flex  justify-start mt-3 flex-wrap gap-2 opacity-70">
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>React</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>Framer Motion</p>

        </div>
        <div className="button-container flex lg:justify-start mt-4 justify-between  lg:gap-80">
         <a href="https://github.com/Velu-samy/Luxecar    "className='px-4 py-1 border border-pink-500'>GitHub</a>
         <a href= "https://luxecar-tau.vercel.app/  " className='px-4 py-1 border border-pink-500'>Live</a>

        </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
