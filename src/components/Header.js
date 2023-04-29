import React from 'react';
import logo from '../assets/logo.svg'

const Header = () => {

  return <header className='py-8'>
    <div className='container mx-auto'></div>
    <div className='flex justify-around'>
      {/*logo*/}
      <a href='·' className='text-gradient btn-link lg:text-[23px]'>IGNACIO <br/> <span className='text-white lg:text-[23px]'>MELGAREJO</span></a>

      {/*button*/}
      <button className='btn btn-sm'>work whit me</button>

    </div>

  </header>;
};

export default Header;
