import "./work.css";
import clock from '../../assets/ProjectImg/clock.png';
import Game from '../../assets/ProjectImg/Game.jpg';
import aria from '../../assets/ProjectImg/Aria.jpg';
import jGentleman from '../../assets/ProjectImg/Jgentleman.png';


const Works = () => {
  return (

    <div className="work_container" id="work">

      <div className="work_card">
      <a className="work_img_pic" href="https://day-19-joesang.vercel.app/"><img src={clock} alt="Mouse" className="work_img" /></a>
          <div className="card-body">
            <h5 className="work_title">Clock</h5>
            <p className="card-text">A clock that changes from "light" mode to "dark" mode</p> 
           </div>
      </div> 

      <div className="work_card">
      <a className="work_img_pic" href="https://play.google.com/store/apps/details?id=com.J3ALWGames&hl=es_VE"><img src={Game} alt="Mouse" className="work_img" /></a>
          <div className="card-body">
            <h5 className="work_title">Go 2D Space</h5>
            <p className="card-text">Videogame programmed in c# using Unity</p> 
            </div>
      </div> 

      <div className="work_card">
      <a className="work_img_pic" href="https://github.com/JoZhang06/Virtual_Assistant_-ARIA-"><img src={aria} alt="Mouse" className="work_img" /></a>
          <div className="card-body">
            <h5 className="work_title">Virtual Assistant</h5>
            <p className="card-text">Virtual Assistant using aumented reality and c#</p>  
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