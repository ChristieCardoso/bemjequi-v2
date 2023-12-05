
import "./Menu.scss";
import bg from "../../assets/backgroundQueijo.png";



export const Menu = () => {
  return (
    <section
      id="menu"
      className="foodMenu bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="foodMenuContainer">
            <h1 className="foodMenuContainerHeader">
              What will you <span className="color-grey">Eat</span> today?
            </h1>           
          </div>
        </div>
      </div>

    </section >
  );
};
