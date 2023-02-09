import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import './skills.css'

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
    <h2 className="section_title">Skills</h2>
    <span className="section_subtitle">My technical level</span>
    <div className="skills_container container grid"> 
      <Frontend></Frontend>
      <Backend></Backend>
    </div>
  </section>
  )
}

export default Skills
