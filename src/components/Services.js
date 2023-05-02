import React from 'react';
//icons

import { BsCheckLg} from 'react-icons/bs';
//import 
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants';
// import {DiJavascript,DiCss3,DiReact,DiGit,DiPostgresql,DiMysql,} from 'react-icons/di'

const services = [
  {
    name: 'UI/UX Design',
    description:'design and layout of the pages',
    
  },
  {
    name: 'Back-End',
    description: 'Work on projects using JavasScript, Postgres, Sequelize, NodeJS, Express',
    
  },
  {
    name: 'Front-End',
    description: 'Work on projects using CSS, HTML, REACT, REDUX',
    
  },
  {
    name: 'Scrum Methodology',
    description: 'I carried out group and individual projects using scrum methodology',
    
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
          <h3 className='h3 max-w-[455px] mb-16'>Im a full stack developer and studen for Tech. in Programing
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
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
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
