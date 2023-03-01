import "./work.css";
import clock from '../../assets/ProjectImg/clock.png';
import animcard from '../../assets/ProjectImg/animationcard.png';
import choose from '../../assets/ProjectImg/choose.png';
import login from '../../assets/ProjectImg/login.png';


const Works = () => {
  return (

    <div className="work_container">

      <div className="work_card">
      <img src={clock} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Clock</h5>
            <p className="card-text">A css clock</p>
            <p className="card-text">Web Page</p>
            <a href="https://vercel.com/jozhang06/day-19-joesang" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work_card">
      <img src={animcard} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Background Slider</h5>
            <p className="card-text">A css slider</p>
            <p className="card-text">Web Page</p>
            <a href="https://vercel.com/jozhang06/day-18-joesang" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work_card">
      <img src={choose} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Social Media Followers</h5>
            <p className="card-text"></p>
            <p className="card-text">Web Page</p>
            <a href="https://day-15-joesang.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work_card">
      <img src={login} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Css Login</h5>
            <p className="card-text">User Login</p>
            <p className="card-text">Web Page</p>
            <a href="https://day-8-joesang.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div>     
      </div>

  );
};
export default Works