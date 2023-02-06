import { useState } from 'react'
import { icons } from 'react-icons/lib'
import { SideBarMenu } from './Components/SideBarMenu'
import { SideBarMenuCard, SideBarMenuItem } from './Types/types'
import { FcAdvertising } from 'react-icons/fc'
import profileImage from './assets/img/download.jpg'

function App() {
  const items:SideBarMenuItem[] = [
    {
      id:'1',
      label: 'Hola',
      icon: FcAdvertising,
      url: "/",
    },
  ];

  const card: SideBarMenuCard = {
    id: "card01",
    displayName : "Joesang Chang",
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
