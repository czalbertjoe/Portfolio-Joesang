import React, { useState } from 'react'
import "./services.css"
import webimg from "../../assets/IconImg/web_icon.png"
import phoneimg from "../../assets/IconImg/phone_ic.png"
import gameimg from "../../assets/IconImg/game_icon.png"

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
              Web  Design
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
                Service with more than 3 months of experience. Providing quality
                work to clients and companies.
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
                  <p className="services-modal-info">I Develop the backend and frontend.</p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Languages as HTML, CSS, Typescript or JavaScript.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company brand.
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
                Service with more than a year of experience. Providing app interaction to android devices.
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
                  <p className="services-modal-info">I Develop the code behind of aplication.</p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Using Unity or android studio.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company brand.
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
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
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
                  <p className="services-modal-info">I Develop the code behind the game.</p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux/ui/ai element interactions.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company brand.
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