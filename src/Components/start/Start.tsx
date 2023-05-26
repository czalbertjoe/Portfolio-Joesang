import React, { useRef, useEffect } from 'react';
import './start.css';
import Social from './Social';
import Data from './Data';
import soundFile from '../../assets/Sounds/SongPrincipal.mp3'

const Hom = () => {
 

  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Hom;
