import React, { useState, useRef } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Form() {
  const [values, setValues] = useState({
    name: '',
    gmail: '',
    disc: ''
  });
  const [submitted, setSubmitted] = useState(false); // State to track submission status
  const form = useRef(); // Form reference for EmailJS

  // Handle input changes
  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_9uaxh5l', // Replace with your EmailJS service ID
        'template_y3fmwkp', // Replace with your EmailJS template ID
        form.current, // Use the form ref to access the DOM
        'Ta_fMPamay_f-64wg' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSubmitted(true); // Show success message
          setValues({ name: '', gmail: '', disc: '' }); // Reset state
          form.current.reset(); // Reset form in the DOM
          setTimeout(() => setSubmitted(false), 4000); w
        },
        (error) => {
          alert('There was an error sending your message. Please try again.');
        }
      );
  };

  return (
    <div>


      <div id='Form' className="row text-white font-title gap-9 items-center lg:flex justify-around lg:py-24 lg:px-20">
        {/* Left Column */}
        <div className="col-1 p-5 w-full lg:w-1/2">
          <motion.h1
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-5xl lg:text-6xl bg-gradient-to-r ml-2 mt-4 from-purple-500 to-pink-500 text-transparent bg-clip-text'
          >
            Get In <span>Touch</span>
          </motion.h1>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="details-container flex flex-col mb-8 mt-8 p-1"
          >
            <p className='lg:text-lg font-serif font-thin'>
              Have an exciting project in mind? I’m always open to new collaborations! Whether it’s building something from scratch or enhancing your existing ideas, let’s work together to bring your vision to life.
            </p>
            <div className="container-tags mt-10 flex gap-1 items-center">
              <MdEmail className="text-purple-500 text-2xl" />
              <p className='lg:text-xl'>91+ 8072624996</p>
            </div>
            <div className="container-tags mt-3 flex gap-1 items-center">
              <MdPhone className="text-purple-300 text-2xl" />
              <p className='lg:text-xl'>Velusamy21.work@gmail.com</p>
            </div>
            <div className="container-tags mt-3 flex gap-1 items-center">
              <MdLocationOn className="text-pink-500 text-2xl" />
              <p className='lg:text-xl'>Chennai, Vadapalani</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="col-2 w-full lg:w-1/2">
          {/* Success Message */}
          {submitted && (
            <p className="text-green-500 text-center mb-10  lg:text-xl  font-semibold">
              Your message has been sent successfully. Thank you!
            </p>
          )}
          <div className="form-container">
            <motion.h1
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className='text-5xl text-slate-300 mx-6'
            >
              Contact
            </motion.h1>

            {/* Form */}
            <motion.form
              ref={form} // Attach form ref for EmailJS
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              onSubmit={handleSubmit}
              className='flex flex-col w-2/1 h-1/2 gap-2 p-7'
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={onInputChange}
                placeholder="Eg: Vetrivel"
                required
                name="name"
                value={values.name} // Bind state to input
                className='bg-transparent border rounded-md outline-none p-2'
              />
              <label htmlFor="gmail">Gmail</label>
              <input
                type="email"
                onChange={onInputChange}
                required
                placeholder='Eg: vetri@123'
                name="gmail"
                value={values.gmail} // Bind state to input
                className='bg-transparent border rounded-md outline-none p-2'
              />
              <label htmlFor="disc">Discussion</label>
              <textarea
                onChange={onInputChange}
                name="disc"
                placeholder='Eg: Develop a user-friendly e-commerce platform'
                rows={6}
                value={values.disc} // Bind state to input
                className='p-2 bg-transparent border rounded-md outline-none'
              ></textarea>
              <div className="button-container flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold mt-4 py-2 px-9 rounded hover:opacity-55 transition duration-300"
                >
                  Click
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;