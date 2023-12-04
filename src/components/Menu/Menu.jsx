import { useState } from "react";

import "./Menu.scss";
import bg from "./d.jpg";

import { burgers } from "../Data/burger";
import { combo } from "../Data/combo";

import { chicken } from "../Data/chicken";

export const Menu = () => {
  const [products, setProducts] = useState(combo);

  const menu = [
    {
      id: 1,
      name: "Combo",
    },
    {
      id: 2,
      name: "Burger",
    },

    {
      id: 4,
      name: "Chicken",
    },
  ];

  const menuClickHandler = (data) => {
    if (data.name === "Combo") {
      setProducts(combo);
    } else if (data.name === "Burger") {
      setProducts(burgers);
    } else if (data.name === "Chicken") {
      setProducts(chicken);
    }
  };

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
            <div className="foodMenuContainerList">
              {menu.map((m) => (
                <div
                  className="foodMenuContainerItem"
                  key={m.id}
                  onClick={() => menuClickHandler(m)}
                >
                  {m.name}
                </div>
              ))}
            </div>
            <div className="foodMenu">
              {products.map((p) => (
                <div className="foodMenuDetails" key={p.id}>
                  <div className="foodMenuImg">
                    <img src={p.imageUrl} alt={p.name} className="bgImg" />
                  </div>
                  <h1>{p.name}</h1>
                  <p>{`${p.price} $`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
