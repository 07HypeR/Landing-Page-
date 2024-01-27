import React, { useEffect } from 'react'
import Hero from './components/Hero/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css' ;

const App = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing:'ease-in-sine',
      delay:100,
    });
  });
  return (
    <div>
      <Hero />
    </div>
  )
}

export default App