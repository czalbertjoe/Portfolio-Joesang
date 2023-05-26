import { useState } from 'react'
import { icons } from 'react-icons/lib'
import "./App.css" 
import { FcHome, FcInfo, FcServices, FcGraduationCap, FcIdea, FcFeedback, FcApproval} from 'react-icons/fc'
import img from './assets/Img/NightBackground.png'
import abouticon from "./assets/IconImg/chat_service_icon.png"
import profileImage from './assets/Img/MyPhoto.jpg'
import Social from './Components/start/Social'
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
import soundFile from './assets/Sounds/SongPrincipal.mp3' 
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
  <audio ref={audioRef} src={soundFile} autoPlay loop />     
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
