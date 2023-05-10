import i18ne from 'i18next';
import React from 'react';
import {useTranslation} from "react-i18next"
import { useState } from 'react';

const Header = () => {
  const [t, i18n] = useTranslation("global")
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };
  return <header className='py-8'>
    <div className='container mx-auto'></div>
    <div className='flex justify-around'>
      {/*logo*/}
      <a href='·' className='text-gradient btn-link lg:text-[23px]'>IGNACIO <br/> <span className='text-white lg:text-[23px]'>MELGAREJO</span></a>

      {/*button*/}
      <button className='btn btn-sm' onClick={toggleLanguage}>{t("banner.header")}</button>

    </div>

  </header>;
};

export default Header;
