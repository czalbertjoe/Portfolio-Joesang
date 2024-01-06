import React from 'react';

export const Databases = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Databases</h3>

      <div className="skills_box">
        <div className="skills_group">
          {/* MongoDB */}
          <div className="skills_data">
            <i className="bx bxs-star-half"></i>
            <div>
              <h3 className="skills_name">Mongo</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* MySQL */}
          <div className="skills_data">
            <i className="bx bx-star"></i>
            <div>
              <h3 className="skills_name">MySQL</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          {/* Oracle */}
          <div className="skills_data">
            <i className="bx bxs-star-half"></i>
            <div>
              <h3 className="skills_name">Oracle</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="skills_data">
            <i className="bx bx-star"></i>
            <div>
              <h3 className="skills_name">PostgreSQL</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          {/* Prisma/Graphql */}
          <div className="skills_data">
            <i className="bx bx-star"></i>
            <div>
              <h3 className="skills_name">Prisma/Graphql</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          {/* SQL Server */}
          <div className="skills_data">
            <i className="bx bxs-star-half"></i>
            <div>
              <h3 className="skills_name">SQL Server</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* Sqlite */}
          <div className="skills_data">
            <i className="bx bxs-star"></i>
            <div>
              <h3 className="skills_name">Sqlite</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Databases;
