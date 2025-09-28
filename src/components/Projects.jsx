import React from 'react'
import { motion } from "motion/react"
import atm from '../asstes/python.jpg';
import ticket from '../asstes/ticket.jpg';
import cs from '../asstes/cw.png';
import car from '../asstes/car.png';
import blog from '../asstes/blog.png';
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
     <div className="row flex flex-col lg:flex-row p-5 lg:px-40 font-tittle text-neutral-100 mt-5 items-center">
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="col-1 w-full lg:w-1/2 flex lg:justify-center"
  >
    <img
      className="w-80 rounded-md border border-transparent hover:border-purple-500"
      src={cs}
      alt="Coffee Shop Preview"
    />
  </motion.div>

  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="col-2 w-full lg:w-1/2 mt-3 lg:mt-0"
  >
    <h2 className="font-semibold mb-1">Coffee Shop Website</h2>

    <ul className="list-disc font-sans font-thin text-sm mt-1">
      <li>
        Built a full-stack coffee shop website using Laravel for backend and React with Tailwind CSS for frontend, featuring secure JWT-based authentication and dynamic product display.
      </li>
      <li>
        Integrated responsive design and modular components with Framer Motion for smooth animations, ensuring a seamless user experience across devices.
      </li>
    </ul>

    <div className="tech-con flex justify-start mt-3 flex-wrap gap-2 opacity-70">
      <p className="mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5">Laravel</p>
      <p className="mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5">JWT Auth</p>
      <p className="mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5">React</p>
      <p className="mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5">Tailwind CSS</p>
      <p className="mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5">Framer Motion</p>
      <p className="mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5">MySQL</p>
    </div>

    <div className="button-container flex lg:justify-start mt-4 justify-between lg:gap-80">
      <a
        href="https://github.com/Velu-samy/Coffee-shop-backend"
        className="px-4 py-1 border border-pink-500"
      >
        GitHub
      </a>
      <a
        href="https://coffee-shop-frontend-ec6j.vercel.app"
        className="px-4 py-1 border border-pink-500"
      >
        Live
      </a>
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
        <ul className='list-disc font-sans font-thin text-sm mt-1'>
  <li>Learned and applied advanced <strong>React</strong> concepts to develop the frontend for <strong>Luxedrive</strong>.</li>
  <li>Utilized <strong>Framer Motion</strong> to create smooth, responsive animations.</li>
  <li>Designed a visually appealing, user-friendly, and fully responsive platform.</li>
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
      <div className="row flex  flex-col  lg:flex-row p-5  lg:px-40 font-tittle text-neutral-100 mt-5 items-center">
        <motion.div whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:-100}}
          transition={{duration:0.8,delay:0.6}}     className="col-1 w-full  lg:w-1/2 flex  lg:justify-center">
            <img src={blog} className='rounded-md w-80 border border-transparent hover:border-purple-500' alt="" />
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:100}}
          transition={{duration:0.8,delay:0.6}}      className="col-2 w-full  lg:w-1/2  mt-3 lg:mt-0">
        <h2 className='font-semibold mb-1'>Tech Hub Blog</h2>
      <ul className='list-disc font-sans font-thin text-sm mt-1'>
  <li>Built a full-stack blog platform with CRUD & JWT authentication.</li>
  <li>Integrated <strong>Cloudinary</strong> for seamless image uploads.</li>
  <li>Designed a responsive UI and improved user experience with <strong>Framer Motion</strong>.</li>
  <li>Optimized authorization flows for secure sessions.</li>
  <li>Refactored backend queries, boosting performance by <strong>40%</strong>.</li>
</ul>

<div className="tech-con flex  justify-start mt-3 flex-wrap gap-2 opacity-70">
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>React</p>
                    <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>Node</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>Express node</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>MongoDb</p>
                    <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>JWT</p>
                              <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>Cloudnary</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>Framer Motion</p>

        </div>
        <div className="button-container flex lg:justify-start mt-4 justify-between  lg:gap-80">
         <a href="https://github.com/Velu-samy/MERN-Blog"className='px-4 py-1 border border-pink-500'>GitHub</a>
         <a href= "https://mern-blog-f.onrender.com " className='px-4 py-1 border border-pink-500'>Live</a>

        </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
