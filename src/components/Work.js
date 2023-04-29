import React from 'react';
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'

//img
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/*text*/}
          <div>
            <h2 className='h2 leading-tight text-accent'> My Lastest <br /> work.</h2>
            <p className='max-w-sm mb-16'>
            I try to work focusing on the design, the aesthetics of my pages and their best utilities
            </p>
            <button className='btn btn-sm'> Vieww all projects</button>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            {/*overbyo */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/*img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
            {/*preTitel */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Desing</span>
            </div>
            {/*titel */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3-1 text.white'>Project Title</span>
            </div>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
         className='flex-1 flex flex-col gap-y-10'>
          {/*image2*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            {/*overbyo */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/*img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
            {/*preTitel */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Desing</span>
            </div>
            {/*titel */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3-1 text.white'>Project Title</span>
            </div>
          </div>
          {/*image3*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            {/*overbyo */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/*img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
            {/*preTitel */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Desing</span>
            </div>
            {/*titel */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3-1 text.white'>Project Title</span>
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
