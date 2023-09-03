import "./work.css";
import clock from '../../assets/ProjectImg/clock.png';
import insect from '../../assets/ProjectImg/InsectGame.png';
import ColorFull from '../../assets/ProjectImg/Colorfull.png';
import login from '../../assets/ProjectImg/login.png';


const Works = () => {
  return (

    <div className="work_container" id="work">

      <div className="work_card">
      <img src={clock} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Clock</h5>
            <p className="card-text">A css clock</p>
            <p className="card-text">Web Page</p>
            <a href="https://day-19-joesang.vercel.app/" className="work_title_link" target={'_blank'} >View Page</a>
          </div>
      </div> 

      <div className="work_card">
      <img src={insect} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Insect Game</h5>
            <p className="card-text">Hard level insect game</p>
            <p className="card-text">Web Page</p>
            <a href="https://day-50-joesang.vercel.app/" className="work_title_link" target={'_blank'} >View Page</a>
          </div>
      </div> 

      <div className="work_card">
      <img src={ColorFull} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Overboard</h5>
            <p className="card-text">Colorful Overboard</p>
            <p className="card-text">Web Page</p>
            <a href="https://day-36-joesang.vercel.app/" className="work_title_link" target={'_blank'} >View Page</a>
          </div>
      </div> 

      <div className="work_card">
      <img src={login} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Css Login</h5>
            <p className="card-text">User Login</p>
            <p className="card-text">Web Page</p>
            <a href="https://day-8-joesang.vercel.app/" className="work_title_link" target={'_blank'} >View Page</a>
          </div>
      </div>     
      </div>

  );
};
export default Works