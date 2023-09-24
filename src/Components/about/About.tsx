import React from 'react';
import './about.css';
import AboutImg from '../../assets/ImgProfile/CV_Joesang_Img.jpg';
import CV from '../../assets/Docs/Joesang_Chang_CV.pdf';
import Info from './info';

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My resume</span>
      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          <Info></Info>
          <p className="about_description">Full Stack Developer<br></br>
          More information as resume <br></br>👇</p> 
          <a download href={CV} className="aboutBtn">
            Download 📁
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
