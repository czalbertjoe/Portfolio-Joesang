import { useState } from 'react'
import { icons } from 'react-icons/lib'
import { SideBarMenu } from './Components/SideBarMenu'
import { SideBarMenuCard, SideBarMenuItem } from './Types/types'
import { FcAbout, FcBusiness, FcAddressBook, FcHome } from 'react-icons/fc'
import profileImage from './assets/img/MyPhoto.jpg'

function App() {
  const items:SideBarMenuItem[] = [
    {
      id:'1',
      label: 'Home',
      icon: FcHome,
      url: "/",
    },
    {
      id:'2',
      label: 'About',
      icon: FcAbout,
      url: "/",
    },
    {
      id:'3',
      label: 'Projects',
      icon: FcBusiness,
      url: "/",
    },
    {
      id:'4',
      label: 'Contact',
      icon: FcAddressBook,
      url: "/",
    },
  ];

  const card: SideBarMenuCard = {
    id: "card01",
    displayName : "Joesang Chang Zavala",
    title: "Developer",
    photoUrl: profileImage,
    Url: "/"
  };
  return (
  <div>
    <SideBarMenu items={items} card={card}></SideBarMenu>
  </div>
  );
}

export default App
