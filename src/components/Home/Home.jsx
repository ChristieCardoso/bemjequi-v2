import homeImage from '../../assets/home-img.png';
import bg from "../../assets/ds.png";

import "./Home.scss";

export const Home = () => {
  return (
    <section id="home" className="home"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="content">
        <h3>Food made with love</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam
          suscipit nemo, natus assumenda, similique placeat illo distinctio
          exercitationem ea, mollitia officiis nulla vel iure illum aliquid
          eaque et accusamus?
        </p>
        <a href="#!" className="btn">
          order now
        </a>
      </div>

      <div className="image">
        <img src={homeImage} alt="home page" />
      </div>
    </section>
  );
};
