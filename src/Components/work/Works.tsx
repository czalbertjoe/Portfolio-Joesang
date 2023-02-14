import "./work.css";
import Work1 from '../../assets/ProjectImg/Work1.png';
import Work2 from '../../assets/ProjectImg/Work2.png';
import Work3 from '../../assets/ProjectImg/Work3.png';
import Work4 from '../../assets/ProjectImg/Work4.png';


const Works = () => {
  return (

    <div className="work_container">

      <div className="work_card">
      <img src={Work1} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Day 1</h5>
            <p className="card-text">Progress</p>
            <p className="card-text">Web Page</p>
            <a href="https://day-5-joesang.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work_card">
      <img src={Work2} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Day 2</h5>
            <p className="card-text">Animation cards</p>
            <p className="card-text">Web Pag</p>
            <a href="https://vercel.com/jozhang06/day-6-joesang" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work_card">
      <img src={Work3} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Day 3</h5>
            <p className="card-text">Split landing page</p>
            <p className="card-text">Web Pag</p>
            <a href="https://day-7-joesang.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div> 

      <div className="work_card">
      <img src={Work4} alt="Mouse" className="work_img" />
          <div className="card-body">
            <h5 className="work_title">Day 6</h5>
            <p className="card-text">User Login</p>
            <p className="card-text">Web</p>
            <a href="https://day-8-joesang.vercel.app/" className="work_title_link" target={'_blank'} >View</a>
          </div>
      </div>     
      </div>

  );
};
export default Works