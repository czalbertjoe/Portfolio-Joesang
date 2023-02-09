import React, { useState } from 'react'
import './qualifications.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = index => {
        setToggleState(index);
    };
  
    return (
      <section>
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My personal journey</span>
  
        <div className="qualification-container container">
          <div className="qualiification-tabs">
            <div
              className={
                toggleState === 1
                  ? 'qualification-button qualification-active button--flex'
                  : 'qualification-button button--flex'
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification-icon"></i>{' '}
              Education
            </div>
  
            <div
              className={
                toggleState === 2
                  ? 'qualification-button qualification-active button--flex'
                  : 'qualification-button button--flex'
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification-icon"></i>{' '}
              Experience
            </div>
          </div>
  
          <div className="qualification-sections">
            <div
              className={
                toggleState === 1
                  ? 'qualification-content qualification-content-active'
                  : 'qualification-content'
              }
            >
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">
                    Bachelor's computer engineering
                  </h3>
                  <span className="qualification-subtitle">
                    Universidad Castro Carazo
                  </span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i> 2019 - Present
                  </div>
                </div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
  
              <div className="qualification-data">
                <div></div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
  
                <div>
                  <h3 className="qualification-title">
                    High School Degree
                  </h3>
                  <span className="qualification-subtitle">
                    MEP
                  </span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i> 2012 - 2017
                  </div>
                </div>
              </div>
            </div>
  
            <div
              className={
                toggleState === 2
                  ? 'qualification-content qualification-content-active'
                  : 'qualification-content'
              }
            >
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">Developer</h3>
                  <span className="qualification-subtitle">SIM</span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                  </div>
                </div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
  
              <div className="qualification-data">
                <div></div>
  
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
  
                <div>
                  <h3 className="qualification-title">SQL Automation Support</h3>
                  <span className="qualification-subtitle">
                    Infotree / Procter And Gamble
                  </span>
                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i> 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Qualification;