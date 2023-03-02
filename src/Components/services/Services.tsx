import React, { useState } from 'react'
import "./services.css"
import webimg from '../../assets/IconImg/website.png';
import phoneimg from '../../assets/IconImg/smartphone.png';
import gameimg from '../../assets/IconImg/xboxl.png';

const Services = () => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index)
  }

  return (
    
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What can i offer</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <img src={webimg} alt="web_icon" className="imgicon" />
            
            <h3 className="services-title">
              Web Design
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
            <div className="services-modal"></div>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="Services-modal-tile">
                Web Design
              </h3>
              <p className="services-modal-description">
              I provide service with experience of more than a year and a half and I also provide quality work for clients and companies
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create the user interface (UI).
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Design and visual aspects of a website.</p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                  Creative, graphic and technical skills.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                  Frontend desing and backend develop too.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
          <img src={phoneimg} alt="phone_icon" className="imgicon" />
            <h3 className="services-title">
              Movil App Develop
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
            <div className="services-modal"></div>
          </span>

          <div
            className={
              toggleState === 2
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="Services-modal-tile">App Developer</h3>
              <p className="services-modal-description">
              Knowledge of innovative applications such as virtual assistant and AR technology.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                  Creating code for programs that run applications.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Design and plan new applications</p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                  Use of development environments such as ↓
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Unity, android studio and more.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
          <img src={gameimg} alt="game_icon" className="imgicon" />
            <h3 className="services-title">
              Game Develop
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
            <div className="services-modal"></div>
          </span>

          <div
            className={
              toggleState === 3
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="Services-modal-tile">Game Develop</h3>
              <p className="services-modal-description">
              I have creating and designing video games with more than three years of experience and knowledge.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                  Creation of scenes and interfaces.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Develop of the code behind the game.</p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Coding of elements for interaction with the player
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                  Character design, settings and animations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;