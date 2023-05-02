import React from 'react';

const Header = () => {

  return <header className='py-8'>
    <div className='container mx-auto'></div>
    <div className='flex justify-around'>
      {/*logo*/}
      <a href='·' className='text-gradient btn-link lg:text-[23px]'>IGNACIO <br/> <span className='text-white lg:text-[23px]'>MELGAREJO</span></a>

      {/*button*/}
      <button className='btn btn-sm'>languaje En</button>

    </div>

  </header>;
};

export default Header;