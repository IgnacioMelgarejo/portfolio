import React from 'react';
//cpuntUp
import CountUp from 'react-countup'
//interseption 
import { useInView } from 'react-intersection-observer'
//motion
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return <section className='section' id='about' ref={ref}>

    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*img*/}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[450px] mix-blend-lighten bg-top '></motion.div>
        {/*text*/}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          classname='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>Im a full stack developer and studen for Tech. in Programing</h3>
          <p className='mb-6'>
            I am an Argentinian developer with experience in back-end and front-end with a lot of creativity and desire to grow.
          </p>
          {/*start*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                     <CountUp  start={0} end={+700} duration={3} /> : null}
               
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              hs of study <br />
              in henry
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={4} duration={3} /> : null}
                
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Proyects <br />
                Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={13} duration={3} /> : null}
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='·' className='text-gradient btn-link'>My portafolio</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
