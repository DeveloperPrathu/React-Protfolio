import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

const App = () => {
  return (
    <div className='overflow-hidden bg-no-repeat bg-cover bg-site'>
      <Header />
      <Banner />
      <Nav />
      <About />
      {/* <Experience /> */}
      <Services />
      <Work />
      <Contact />
      {/* <Footer /> */}
      <div className='h-[260px]'></div>
    </div>
  );
};

export default App;
