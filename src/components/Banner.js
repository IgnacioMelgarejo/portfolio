import { React, useState, useEffect } from 'react';
import { Link } from 'react-scroll'
//img
import image from '../assets/nacho-banner.png';
//icons 
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion, AnimatePresence } from 'framer-motion';
//variants
import { fadeIn } from '../variants'
//translation
import { useTranslation } from "react-i18next"

// import Typed from 'react-typed';
// import { Typewriter } from 'react-typewriter';

import cvEs from '../pdf/CV-MAYO-2023-IM.pdf'
import cvEn from '../pdf/CV-MAY-2023-IM.pdf'


const Banner = () => {

  const [t, i18n] = useTranslation("global")

  const currentLanguage = i18n.language;

  // const [sequenceLang, setSequenceLang] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sequence = ['developer', 'Self-taught', 'Student'];
  const sequenceEs = ['desarrollador', 'Autodidacta', 'Estudiante'];

  const sequenceLang = currentLanguage === "es" ? sequenceEs : sequence;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sequenceLang.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [sequenceLang.length]);


  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home' >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

        {/* text*/}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: true, amount: 0.7 }} className='text-[25px] font-bold leading-[0.8] lg:text-[70px]'>
            IGNACIO <span>MELGAREJO</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden' whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='mb-6 mt-2 text-[36px] lg:text-[60px] 
          font-secondary font-semibold uppercase leanding-[1] items-center '>
            <span className=' text-white mr-4' >{t("banner.i")}</span>
            <AnimatePresence exitBeforeEnter>
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className='text-accent'
                
              >
                {sequenceLang[currentIndex]}
              </motion.span>
            </AnimatePresence>

          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial='hidden' whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>

            {t("banner.presentation")}

          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

            <Link to='contact' activeClass='active'
              smooth={true}
              spy={true}>
              <button className='btn btn-lg'>{t("banner.contactme")}</button>

            </Link>
            <a href={currentLanguage === 'en' ? cvEn : cvEs} className='text-gradient btn-link' target='_blank' download>{t("banner.resume")}
            </a>
          </motion.div>
          {/* sociales */}

          <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: true, amount: 0.7 }}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>

            <a href='https://www.linkedin.com/in/ignacio-melgarejo-2b16a61b9/' target="_blank">
              <FaLinkedin />
            </a>

            <a href='https://github.com/IgnacioMelgarejo' target="_blank">
              <FaGithub />
            </a>

            <a href='https://twitter.com/IgnacioMelgar19' target="_blank">
              <FaTwitter />
            </a>

          </motion.div>
        </div>
        {/* image*/}
        <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={image} alt='' />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
