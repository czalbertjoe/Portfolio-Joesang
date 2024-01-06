import React from 'react';

export const Frameworks = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frameworks</h3>

      <div className="skills_box">
        <div className="skills_group">
          {/* Angular */}
          <div className="skills_data">
            <i className="bx bxs-star-half"></i>
            <div>
              <h3 className="skills_name">Angular</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* Asp.net */}
          <div className="skills_data">
            <i className="bx bxs-star"></i>
            <div>
              <h3 className="skills_name">Asp.net</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          {/* Express.js */}
          <div className="skills_data">
            <i className="bx bx-star"></i>
            <div>
              <h3 className="skills_name">Express.js</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          {/* Next.js */}
          <div className="skills_data">
            <i className="bx bxs-star-half"></i>
            <div>
              <h3 className="skills_name">Next.js</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* Node.js */}
          <div className="skills_data">
            <i className="bx bxs-star-half"></i>
            <div>
              <h3 className="skills_name">Node.js</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* React.js */}
          <div className="skills_data">
            <i className="bx bxs-star-half"></i>
            <div>
              <h3 className="skills_name">React.js</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
