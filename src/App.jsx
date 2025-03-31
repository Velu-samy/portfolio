import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Form from './components/Form';
import  './App.css';
import Error from './components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
   <BrowserRouter>
   <div className="overflow-x-hidden ">

<div className='bg fixed -z-10 top-0 w-full h-full'>
<div className=" absolute  top-0  h-full  w-full h-screen bg-slate-950 z-0">
  {/* Radial Gradient Circles */}
  <div className="gradient-circle left-[-10%] top-[-10%]" />
  <div className="gradient-circle right-[-5%] top-[50%]" />
</div>
</div>



   <Routes>
    <Route  path="/"  element={


<div className="relative z-10">
  <Navbar />
  <Hero />
  <About />
  <Technologies />
  <Experience />
  <Projects />
  <Form />
  <Footer/>
</div>



    } />

    <Route path="*"  element={<Error/>}  />
   </Routes>

   </div>
   
   
   </BrowserRouter>
  );
}

export default App;

