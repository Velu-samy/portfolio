import React from 'react'
import {motion} from 'motion/react'
const Experience = () => {
  return (
    <div className='mb-10'>
      <motion.h2 whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:-50}}
    transition={{duration:0.8,delay:0.2}}    className='text-center  font-tittle  text-5xl mt-4 text-neutral-400  '>Experience</motion.h2>
      <div className="row flex flex-col p-5  lg:flex-row  mt-10 mb-8  lg:px-40 font-tittle text-neutral-100">
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.8, delay:0.2}}              className="col-1 w-full    lg:w-1/2 flex  lg:justify-center">
            <h3   className=''>Oct 2024 - Dec 2024</h3>
        </motion.div>
        <motion.div   whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.8, delay:0.2}}        className="col-2  w-full lg:w-1/2  mt-3 lg:mt-0 ">
        <h2 className='font-semibold'>Core Java-Intern</h2>
        <p className='font-sans font-thin text-sm mt-1'> Developed a foundational understanding of Advanced Java Programming and Object-Oriented Programming Concepts,  
 Gained practical exposure by working on database-driven projects, focusing on functionality and design,  
 Explored modern frameworks like Hibernate and Spring Boot while building hands-on experience.</p>
        <div className="tech-con flex  justify-start mt-3 flex-wrap gap-2 opacity-70">
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'> Core Java</p>
          <p className='mr-3 rounded-sm  border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>Mysql Database</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'> Hybernate</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'> Springboot </p>
        </div>
        </motion.div>
      </div>
      <div     className="row flex  flex-col  lg:flex-row p-5  lg:px-40 font-tittle text-neutral-100 mt-5">
        <motion.div  whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-100}}
    transition={{duration:0.8,delay:0.4}}  className="col-1 w-full  lg:w-1/2 flex  lg:justify-center">
            <h3> July 2023 – Aug 2023</h3>
        </motion.div>
        <motion.div   whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.8, delay:0.4}}         className="col-2 w-full  lg:w-1/2  mt-3 lg:mt-0">
        <h2 className='font-semibold'>Full Stack Development-Intern</h2>
        <p className='font-sans font-thin text-sm mt-1'> Developed a comprehensive Library Management System during the internship, focusing on database management,
connectivity, and responsive design.
</p>
<div className="tech-con flex  justify-start mt-3 flex-wrap gap-2 opacity-70">
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>HTML</p>
          <p className='mr-3 rounded-sm  border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>CSS</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'> Javascript</p>
          <p className='mr-3 rounded-sm border-purple-600 text-purple-400 bg-black border p-0.5 px-1.5'>PHP</p>
        </div>
        </ motion.div>
      </div>
    </div>
  )
}

export default Experience

