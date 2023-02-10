import React from 'react'
import "./about.css"
import AboutImg from "../../assets/Img/MyProfile.jpg"
import CV from "../../assets/SVG/ChangJa-ProfessionalCV.pdf"
import Info from './info'

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>
      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          <Info></Info>
          <p className="about_description">Fronteend developer, I create web pages with UI / UX user interface.</p>
          <a download={CV} href="" className="button button--flex">Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About