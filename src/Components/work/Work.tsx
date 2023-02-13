import React from 'react'
import './work.css'
import Works from './Works'

export const Work = () => {
  return (
    <section className='work section' id='portfolio'>
        <h2 className='section_title'>My works</h2>
            <span className='section_subtitle'> Most recently </span>
            <Works></Works>
    </section>
  )
}
export default Work
