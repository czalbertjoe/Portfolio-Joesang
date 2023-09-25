import React from 'react'
import blender from '../../assets/IconImg/blender.png'

export const Technologies = () => {
  return (
    <div className="skills_content_tech">
        <h3 className="skills_title">Technologies</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                <i className='bx bxl-github bx-tada' ></i>

                <div>
                    <h3 className="skills_name">Github</h3> 
                </div><br></br>
                </div>

                <div className="skills_data">
                <i className='bx bxl-visual-studio' ></i>

                <div>
                    <h3 className="skills_name">VS and Vs-Code</h3> 
                </div><br></br>
                </div> 

                <div className="skills_data">
                <i className='bx bxl-docker' ></i>

                <div>
                    <h3 className="skills_name">Docker</h3> 
                </div><br></br>
                </div>

                <div className="skills_data">
                <i className='bx bxl-unity bx-tada' ></i>

                <div>
                    <h3 className="skills_name">Unity</h3> 
                </div><br></br>
                </div>
                <div className="skills_data">
                <img src={blender} alt="Blender" />

                <div>
                    <h3 className="skills_name">Blender</h3> 
                </div>
                </div> 
                <div className="skills_data">
                <i className='bx bxl-android' ></i>

                <div>
                    <h3 className="skills_name">Android Studio</h3> 
                </div><br></br>
                </div>
                <div className="skills_data">
                <i className='bx bxs-music' ></i>

                <div>
                    <h3 className="skills_name">FL Studio</h3> 
                </div><br></br>
                </div>
                
                <div className="skills_data">
                <i className='bx bx-video bx-tada' ></i>

                <div>
                    <h3 className="skills_name">Wondershare</h3> 
                </div><br></br>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies
