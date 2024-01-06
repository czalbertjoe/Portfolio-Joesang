import React from 'react';
import blender from '../../assets/IconImg/blender.png';

export const Technologies = () => {
  return (
    <div className="skills_content_tech">
      <h3 className="skills_title">Technologies</h3>
      <br />
      <div className="skills_box">
        <div className="skills_group">
          {/* Android Studio */}
          <div className="skills_data">
            <i className="bx bxl-android"></i>
            <div>
              <h3 className="skills_name">Android Studio</h3>
            </div>
            <br />
          </div>

          {/* Blender */}
          <div className="skills_data">
            <img src={blender} alt="Blender" />
            <div>
              <h3 className="skills_name bx-tada">Blender</h3>
            </div>
          </div>

          {/* Docker */}
          <div className="skills_data">
            <i className="bx bxl-docker"></i>
            <div>
              <h3 className="skills_name bx-tada">Docker</h3>
            </div>
            <br />
          </div>

          {/* FL Studio */}
          <div className="skills_data">
            <i className="bx bxs-music"></i>
            <div>
              <h3 className="skills_name">FL Studio</h3>
            </div>
            <br />
          </div>

          {/* Github */}
          <div className="skills_data">
            <i className="bx bxl-github bx-tada"></i>
            <div>
              <h3 className="skills_name">Github</h3>
            </div>
            <br />
          </div>

          {/* Unity */}
          <div className="skills_data">
            <i className="bx bxl-unity bx-tada"></i>
            <div>
              <h3 className="skills_name">Unity</h3>
            </div>
            <br />
          </div>

          {/* Visual Studio/Code */}
          <div className="skills_data">
            <i className="bx bxl-visual-studio"></i>
            <div>
              <h3 className="skills_name">Visual Studio/Code</h3>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
