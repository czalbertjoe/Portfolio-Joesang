import React, { useState } from 'react';
import './journey.css';

const Journey = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index : any) => {
    setToggleState(index);
  };

  return (
    <section id="journey">
      <h2 className="section-title-q">Journey</h2>
      <span className="section-subtitle-q">My personal trajectory</span>

      <div className="journey-container container">
        <div className="journey-tabs">
          <div
            className={
              toggleState === 1
                ? 'journey-button journey-active button--flex'
                : 'journey-button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap journey-icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'journey-button journey-active button--flex'
                : 'journey-button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt journey-icon"></i> Experience
          </div>
        </div>

        <div className="journey-sections">
          <div
            className={
              toggleState === 1
                ? 'journey-content journey-content-active'
                : 'journey-content'
            }
          >
            <div className="journey-data">
              <div>
                <h3 className="journey-title">Bachelor's computer engineering</h3>
                <span className="journey-subtitle">Castro Carazo - University</span>
                <div className="journey-calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>

              <div>
                <span className="journey-rounder"></span>
                <span className="journey-line"></span>
              </div>
            </div>

            <div className="journey-data">
              <div></div>

              <div>
                <span className="journey-rounder"></span>
                <span className="journey-line"></span>
              </div>

              <div>
                <h3 className="journey-title">High School Degree</h3>
                <span className="journey-subtitle">MEP</span>
                <div className="journey-calender">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2016
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'journey-content journey-content-active'
                : 'journey-content'
            }
          >
            <div className="journey-data">
              <div>
                <h3 className="journey-title">Developer</h3>
                <span className="journey-subtitle">SIM</span>
                <div className="journey-calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>

              <div>
                <span className="journey-rounder"></span>
                <span className="journey-line"></span>
              </div>
            </div>

            <div className="journey-data">
              <div></div>

              <div>
                <span className="journey-rounder"></span>
                <span className="journey-line"></span>
              </div>

              <div>
                <h3 className="journey-title">SQL Automation Support</h3>
                <span className="journey-subtitle">
                  Infotree / Procter And Gamble
                </span>
                <div className="journey-calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div>
                <h3 className="journey-title">Freelancer</h3>
                <span className="journey-subtitle">Freelance</span>
                <div className="journey-calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>

              <div>
                <span className="journey-rounder"></span>
                <span className="journey-line"></span>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Journey;

