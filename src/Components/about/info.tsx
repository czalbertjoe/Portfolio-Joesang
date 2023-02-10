import React from 'react'

export const Info = () => {
  return (
    <div className="about_info grid">
      
      <div className="about_box">
        <i className="bx bxs-award about_icon" ></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">A years working</span>
      </div>

      <div className="about_box">
        <i className="bx bxs-briefcase about_icon" ></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">10 web projects</span>
      </div>

      <div className="about_box">
        <i className="bx bx-support about_icon" ></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default Info