import React from 'react'
import message from "../../assets/IconImg/chat.png"
import glasses from "../../assets/IconImg/glasses.png"

export const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">Chang Joesang</h1>
      <img src={glasses} alt="web_icon" className='home_emote' width="10px" height="120px"  />
      <h3 className="home_subtitle">Designer and Developer</h3>
      <p className="home_description">I'm Joe, a person with some knowledge as a web designer, web developer, game designer, game developer, mobile app developer, desktop app developer/designer, I'm someone creative and I want to learn more and I also do some music and digital art.</p>
      <br></br><hr color="sky blue"></hr><br></br>
      <a href="#contact" className="sendBtn">Go to messaging</a>     
    </div>
  )
}

export default Data
