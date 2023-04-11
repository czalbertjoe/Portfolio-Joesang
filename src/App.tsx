import { useState } from 'react'
import { icons } from 'react-icons/lib'
import "./App.css"
import { SideBarMenu } from './Components/sideBar/SideBarMenu'
import { SideBarMenuCard, SideBarMenuItem } from './Components/sideBar/Types/types'
import { FcHome, FcInfo, FcServices, FcGraduationCap, FcIdea, FcFeedback, FcApproval} from 'react-icons/fc'
import img from './assets/Img/NightBackground.png'
import abouticon from "./assets/IconImg/chat_service_icon.png"
import profileImage from './assets/Img/MyPhoto.jpg'
import Social from './Components/home/Social'
import Hom from './Components/home/Hom'
import { About } from './Components/about/About'
import Skills from './Components/skills/Skills'
import Services from './Components/services/Services'
import Qualifications from './Components/qualifications/Qualifications'
import Contact from './Components/contact/Contact'
import { Footer } from './Components/footer/Footer'
import Work from './Components/work/Work'
import Scrollup from './Components/ScrollUp/Scrollup'
import Stars from './Components/Stars/starts'



function App() {
  const items:SideBarMenuItem[] = [
    {
      id:'1',
      label: 'Home',
      icon: FcHome,
      url: "#home",
    },
    {
      id:'2',
      label: 'About',
      icon: FcInfo,
      url: "#about",
    },
    {
      id:'3',
      label: 'Skills',
      icon: FcIdea,
      url: "#skills",
    },
    {
      id:'4',
      label: 'Services',
      icon: FcServices,
      url: "#services",
    },{
      id:'5',
      label: 'Works',
      icon: FcApproval,
      url: "#work",
    },
    {
      id:'6',
      label: 'Qualifications',
      icon: FcGraduationCap,
      url: "#qualifications",
    },
    
    {
      id:'7',
      label: 'Contact',
      icon: FcFeedback,
      url: "#contact",
    },
  ];

  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "",
    title: "",
    photoUrl: profileImage,
    Url: "/"
  };
  return (
  <div>  
    <SideBarMenu items={items} card={card}></SideBarMenu> 
    <Hom></Hom>
    <About></About>
    <Skills></Skills>
    <Services></Services>
    <Work></Work>
    <Qualifications></Qualifications>
    <Contact></Contact>
    <Footer></Footer>
    <Scrollup></Scrollup>
    <Stars></Stars>
  </div>
  );
}

export default App
