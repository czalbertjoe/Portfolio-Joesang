import "./App.css" 
import Hom from './Components/start/Start'
import { About } from './Components/about/About'
import Skills from './Components/skills/Skills' 
import Journey from './Components/journey/Journey'
import Contact from './Components/contact/Contact'
import { Footer } from './Components/footer/Footer'
import Work from './Components/work/Work'
import Stars from './Components/backgroundAnimation/starts'
import Starstwo from './Components/backgroundAnimation/starstwo'  
import Fog from './Components/backgroundAnimation/Fog'   
import React, { useRef, useEffect } from 'react';  
import Header from './Components/header/Header'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);
  
  return (
   
  <div>        
    <Header></Header>
    <Hom></Hom>
    <About></About>
    <Skills></Skills> 
    <Work></Work>
    <Journey></Journey>
    <Contact></Contact>
    <Footer></Footer> 
    <Stars></Stars>
    <Starstwo></Starstwo>
    <Fog></Fog>
  </div>
  );
}

export default App
