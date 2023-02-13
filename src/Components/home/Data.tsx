import React from 'react'
import message from "../../assets/IconImg/chat.png"
import glasses from "../../assets/IconImg/glasses.png"

export const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">Chang Joesang</h1>
      <img src={glasses} alt="web_icon" className='home_emote' width="10px" height="120px"  />
      <h3 className="home_subtitle">Designer and Developer</h3>
      <p className="home_description">I'm Joesang a creative web designer, web developer, game developer, programmer and I also do some music and digital art.</p>
      <br></br><hr color="sky blue"></hr><br></br>
      <a href="#contact" className="sendBtn">Send me a message</a>   
      <img src={message} alt="web_icon" width="37px" height="27px" className="icon" />
      
    </div>
  )
}

export default Data
