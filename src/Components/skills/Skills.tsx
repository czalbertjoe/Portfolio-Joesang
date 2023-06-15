import React from 'react'
import Technologies from './Technologies'
import Frameworks from './Frameworks'
import Databases from './Databases'
import Languages from './Languages'
import './skills.css'

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
    <h2 className="section_title">Skills</h2>
    <span className="section_subtitle">My technical habilities</span>
    <div className="skills_container container grid"> 
      <Languages></Languages>
      <Databases></Databases>
      <Frameworks></Frameworks>
      <Technologies></Technologies>
    </div>
  </section>
  )
}

export default Skills
