import "./work.css";
import clock from '../../assets/ProjectImg/clock.png';
import insect from '../../assets/ProjectImg/InsectGame.png';
import ColorFull from '../../assets/ProjectImg/Colorfull.png';
import jGentleman from '../../assets/ProjectImg/Jgentleman.png';


const Works = () => {
  return (

    <div className="work_container" id="work">

      <div className="work_card">
      <a className="work_img_pic" href="https://day-19-joesang.vercel.app/"><img src={clock} alt="Mouse" className="work_img" /></a>
          <div className="card-body">
            <h5 className="work_title">Clock</h5>
            <p className="card-text">A clock made with CSS that changes from "light" mode to "dark" mode</p> 
           </div>
      </div> 

      <div className="work_card">
      <a className="work_img_pic" href="https://day-50-joesang.vercel.app/"><img src={insect} alt="Mouse" className="work_img" /></a>
          <div className="card-body">
            <h5 className="work_title">Insect Game</h5>
            <p className="card-text">Difficult level insect game, where you have to catch them all (50 day project)</p> 
            </div>
      </div> 

      <div className="work_card">
      <a className="work_img_pic" href="https://day-36-joesang.vercel.app/"><img src={ColorFull} alt="Mouse" className="work_img" /></a>
          <div className="card-body">
            <h5 className="work_title">Overboard</h5>
            <p className="card-text">Colorful Overboard (50 day project)</p>  
          </div>
      </div> 

      <div className="work_card">
      <a className="work_img_pic" href="https://just-gentleman-e-commerce.vercel.app/"><img src={jGentleman} alt="Mouse" className="work_img" /></a>
          <div className="card-body">
            <h5 className="work_title">Just Gentleman</h5>
            <p className="card-text">An Ecommerce project based on a men's store<br></br>(Spanish)</p>  
          </div>
      </div>     
      </div>

  );
};
export default Works