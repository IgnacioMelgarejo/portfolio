import React from 'react';
//icons

import { BsCheckLg } from 'react-icons/bs';
//import 
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants';
import { DiJavascript1, DiCss3, DiReact, DiGit, DiPostgresql, DiMysql, } from 'react-icons/di'
import { SiRedux, SiExpress, SiTypescript, SiSequelize} from 'react-icons/si'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaNode } from 'react-icons/fa'

const services = [
  {
    name: 'My Skils',
    description: <div className="flex flex-wrap justify-start">

      <div>
        <DiJavascript1 className="mr-6 text-3xl md:text-5xl" />
      </div>
      <DiReact className="mr-6 text-3xl md:text-5xl" />
      <div>
        <DiGit className="mr-6 text-3xl md:text-5xl" />
      </div>
      <div>
        <FaNode className="mr-6 text-3xl md:text-5xl" />
      </div>

      <div>
        <AiOutlineHtml5 className="mr-6 text-3xl md:text-4xl" />
      </div>

      <div>
        <DiMysql className="mr-6 text-3xl md:text-5xl" />
      </div>
      <div>
        <DiPostgresql className="mr-6 text-3xl md:text-4xl" />
      </div>

      <div>
        <DiCss3 className="mr-6 text-3xl md:text-4xl" />
      </div>

      <div>
        <SiRedux className="mr-6 text-2xl md:text-3xl" />
      </div>

      <div>
        <SiExpress className="mr-6 text-2xl md:text-4xl" />
      </div>

      <div>
        <SiSequelize className="mr-6 text-2xl md:text-3xl" />
      </div>
      
      <div>
        <SiTypescript className="mr-6 text-2xl md:text-3xl" />
      </div>

    </div>,

  },
  {
    name: 'Back-End',
    description: 'Creation and maintenance of web applications, from the design of the architecture to the implementation of business logic, databases and the integration of external services through APIs.',

  },
  {
    name: 'Front-End',
    description: 'Design and development of scalable web components and applications, integrating frameworks and web services. Implementing good performance and optimization practices.',

  },
  {
    name: 'Scrum Methodology',
    description: 'Working in multidisciplinary teams, participating in the design of sprints, definition of user stories, task estimation, progress monitoring and feedback.',

  }
]

const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*text & image */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What i Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Design, development and maintenance of web applications
          </h3>
          <a href='https://github.com/IgnacioMelgarejo?tab=repositories'>
            <button className='btn btn-sm'>See my work</button>
          </a>
        </motion.div>
        {/*service */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/*service list */}
          <div>{services.map((service, index) => {
            //destructure service
            const { description, name, link } = service;
            return (
              <div className='border-b border-white/20 h-[150px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight text-base md:text-sm'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='.' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsCheckLg />
                  </a>
                  <a href='.' className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
            )
          })}</div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
