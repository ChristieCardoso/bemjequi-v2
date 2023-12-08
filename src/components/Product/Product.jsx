
import "./Product.scss";
import bg from "../../assets/backgroundQueijo.png";
import dr from "../../assets/dr.png";


export const Product = () => {
  return (
    <section
      id="Product"
      className="ProductContainer bgImg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="ProductCard">
        <img className="ProductCardImg" src={dr} alt="Pessoa Cortando um Queijo"></img>

        <div className="ProductCardDetails">
          <h3>
            Modo de Conservação
          </h3>
          <p>
            Mantenha resfriado de 1 °C a 10 °C. Após aberto, conservar em geladeira e consumir em até 10 dias.
          </p>
          <h3>
            Ingredientes
          </h3>
          <p>
            Leite , cloreto de sódio, cloreto de cálcio, fermento lático e coagulante.          </p>
        </div>
      </div>

    </section >
  );
};
