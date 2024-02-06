import React, { useState } from 'react';
import "./work.css";
import RMBlue from '../../assets/ProjectImg/RetroMediaBlue.jpg';
import Game from '../../assets/ProjectImg/Game.jpg';
import aria from '../../assets/ProjectImg/Aria.jpg';
import jGentleman from '../../assets/ProjectImg/Jgentleman.png';

const Works = () => {
  const [showModal, setShowModal] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleModalOpen = (url : any) => {
    setRedirectUrl(url);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleRedirect = () => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  return (
    <div className="work_container" id="work">
      {showModal && (
        <div className="modal" onClick={handleModalClose}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <p>Hola, la página siguiente te llevará a Vercel, sin embargo, la aplicación se fabricó usando Rapid API, lo que puede generar una alerta de Phishing si tienes algún protector contra malware.</p>
            <button onClick={handleRedirect}>Continuar</button>
            <button onClick={handleModalClose}>Cancelar</button>
          </div>
        </div>
      )}

      <div className="work_card">
        <div className="work_img_pic" onClick={() => handleModalOpen("https://retro-media-blue.vercel.app/")}>
          <img src={RMBlue} alt="Retro Media Blue" className="work_img" />
        </div>
        <div className="card-body">
          <h5 className="work_title">Retro Media Blue</h5>
          <p className="card-text">A video app clone focused on YouTube</p> 
        </div>
      </div> 

      <div className="work_card">
        <a className="work_img_pic" href="https://play.google.com/store/apps/details?id=com.J3ALWGames&hl=es_VE">
          <img src={Game} alt="Go 2D Space" className="work_img" />
        </a>
        <div className="card-body">
          <h5 className="work_title">Go 2D Space</h5>
          <p className="card-text">Videogame programmed in C# using Unity</p> 
        </div>
      </div> 

      <div className="work_card">
        <a className="work_img_pic" href="https://github.com/JoZhang06/Virtual_Assistant_-ARIA-">
          <img src={aria} alt="Virtual Assistant" className="work_img" />
        </a>
        <div className="card-body">
          <h5 className="work_title">Virtual Assistant</h5>
          <p className="card-text">Virtual Assistant using augmented reality and C#</p>  
        </div>
      </div> 

      <div className="work_card">
        <a className="work_img_pic" href="https://just-gentleman-e-commerce.vercel.app/">
          <img src={jGentleman} alt="Just Gentleman" className="work_img" />
        </a>
        <div className="card-body">
          <h5 className="work_title">Just Gentleman</h5>
          <p className="card-text">An Ecommerce project based on a men's store (Spanish)</p>  
        </div>
      </div>     
    </div>
  );
};

export default Works;
