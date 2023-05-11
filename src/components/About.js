import React from 'react';
//cpuntUp
import CountUp from 'react-countup'
//interseption 
import { useInView } from 'react-intersection-observer'
//motion
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll'
//translate
import {useTranslation} from "react-i18next"

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [t, i18n] = useTranslation("global")

  return <section className='section' id='about' ref={ref}>

    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*img*/}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='flex-1  lg:bg-about bg-contain bg-no-repeat h-[580px] mix-blend-lighten bg-top hidden md:block max-w-none'></motion.div>
        {/*text*/}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          classname='flex-1 text-center justify-center'>
          <h2 className='h2 text-accent'>{t("about.about")}</h2>
          <h3 className='h3 mb-4'>{t("about.title")}</h3>
          <p className='mb-6 max-w-[600px]'>
          {t("about.content")}<br/>
          </p>
          {/*start*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={700} duration={3} /> : null}
                    +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              {t("about.hs")}<br />
               {t("about.inH")}
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={2} duration={3} /> : null}
                k+
              </div>

              <div className='font-primary text-sm tracking-[2px]'>
              {t("about.hs")}<br />
               {t("about.inU")}
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={10} duration={3} /> : null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              {t("about.projects")} <br />
              {t("about.worked")}
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>


            <Link to='contact' activeClass='active'
              smooth={true}
              spy={true}
            >
              <button className='btn btn-lg'>{t("banner.contactme")}</button>
            </Link>
            <a href='·' className='text-gradient btn-link'>{t("about.m")}</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
