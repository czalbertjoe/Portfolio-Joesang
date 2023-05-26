import React from 'react'

export const Info = () => {
  return (
    <div className="about_info grid">
      
      <div className="about_box">
      <i className='bx bx-bolt-circle about_icon'></i>
        <h3 className="about_title">Knowledge</h3>
        <span className="about_subtitle">Programming,<br></br>Databases, etc</span>
      </div>

      <div className="about_box">
      <i className='bx bxs-face about_icon'></i>
        <h3 className="about_title">Languages</h3>
        <span className="about_subtitle">Spanish/English</span>
      </div>

      <div className="about_box">
      <i className='bx bx-headphone about_icon' ></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default Info