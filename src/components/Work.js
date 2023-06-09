import React from 'react';
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'

//img
import img1 from '../assets/play-masters.png'
import img2 from '../assets/doggies.png'
import img3 from '../assets/la-ruina.jpg'

import { useTranslation } from "react-i18next"

const Work = () => {

  const [t, i18n] = useTranslation("global")

  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/*text*/}
          <div>
            <h2 className='h2 leading-tight text-accent'>{t("work.last")} <br /> { t("work.work")}</h2>
            <p className='max-w-sm mb-16'>
            {t("work.try")}
            </p>
            <a href='https://github.com/IgnacioMelgarejo?tab=repositories'>
              <button className='btn btn-sm'>{t("work.all")}</button>
            </a>
          </div>
          {/*image*/}
          <a href='https://github.com/IgnacioMelgarejo/PI-Dogs-FT30b'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              {/*overbyo */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}

              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />

              {/*preTitel */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Play Masters</span>
              </div>

              {/*titel */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3-1 text.white'>Games app</span>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10'>
          {/*image2*/}
          <a href='https://github.com/IgnacioMelgarejo/Games-Proyect'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              {/*overbyo */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
              {/*preTitel */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Doggies</span>
              </div>
              {/*titel */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3-1 text.white'>{t("work.dog")}</span>
              </div>
            </div>
          </a>
          {/*image3*/}
          <a href='https://tv.laruinarecords.cl/'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              {/*overbyo */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img */}

              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='https://tv.laruinarecords.cl/' />

              {/*preTitel */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>La Ruina</span>
              </div>
              {/*titel */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3-1 text.white'>Music app</span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
