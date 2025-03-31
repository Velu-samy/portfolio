import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb, DiMysql, DiPhp } from "react-icons/di";
import {motion} from 'motion/react'
import { animate, delay } from 'motion';

const variants = (duration) =>(
  {
    initial :{y:-10},
    animate :{y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
      },

    },
  });
  


function Technologies() {
  return (
    <div className="tech overflow-hidden  p-10 px-20">
          <div className="icon-contrainer border-b   border-b-zinc-600  mb-10 ">
        <motion.h2 whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:-50}}
    transition={{duration:0.8,delay:0.2}}    className='text-center  font-tittle  text-5xl mt-4 text-neutral-400  '>Technologies</motion.h2>
  <motion.div whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-50}}
    transition={{duration:0.8,delay:0.4}}
  className='flex flex-wrap gap-4 justify-center items-center mt-10 mb-7'>
       <motion.div 
       variants={variants(2)}
        initial='initial'
        animate='animate'

        className="icon-box  border-2 p-2 border-neutral-700 rounded-md  ">
       <FaReact size={50} color="cyan" />
       </motion.div>
     <motion.div  variants={variants(5)}
     initial='initial'
     animate='animate'
     className="icon-box  border-2 p-2 border-neutral-700 rounded-md  ">
     <FaNodeJs size={50} color="green" />
     </motion.div>
     <motion.div variants={variants(2)}
     initial='initial'
     animate='animate'   className="icon-box  border-2 p-2 border-neutral-700 rounded-md  ">
     <DiMongodb size={50} color="teal" />

     </motion.div>
     <motion.div variants={variants(5)}
     initial='initial'
     animate='animate'
     className="icon-box  border-2 p-2 border-neutral-700 rounded-md  ">
     <DiMysql size={50} color="blue" />

     </motion.div>
     <motion.div  variants={variants(2)}
     inital="inital"
     animate="animate"
      className="icon-box  border-2  p-2 border-neutral-700 rounded-md  ">
     <DiPhp size={50} color="purple" />

     </motion.div>

    </motion.div>
    </div>
  
    </div>
  
  )
}

export default Technologies

