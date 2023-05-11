import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <div className='mt-10'> {/* margen superior para separar del componente Banner */}
        <About /> 
      </div>
      <div className='mt-10'>
      <Services />
      </div>
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
      <div className='pb-20'></div>
    </div>
  );
};

export default App;
