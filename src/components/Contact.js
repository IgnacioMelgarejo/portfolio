import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast'
//variants
import { fadeIn } from '../variants'


const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm('service_yapguyq', 'template_thqkcrl', form.current, 'uvI4W5BqKMSyv80l3')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        toast.success('Successful email');
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Failed to send email');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className='section py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/*form*/}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              type='text'
              name='user_name'
              placeholder='Your name'
              required
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              type='email'
              name='user_email'
              placeholder='Your email'
              required
            />

            <textarea
              className='bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              type='text'
              name='message'
              placeholder='Your message'
              required
            ></textarea>

            <button className='btn btn-lg' type='submit' disabled={isSubmitting} >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            <Toaster/>
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
