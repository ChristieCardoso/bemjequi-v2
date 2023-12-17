import "./Product.scss";

export const Product = () => {
  return (
    <section
      id="Product"
      className="ProductContainer bgImg"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/tyyqihe0awkccu844auc)` }}
    >
      <div className="ProductCard">
        <img className="ProductCardImg" src='https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/cgzwc9ykqzxqj6u01wda' alt="Pessoa Cortando um Queijo"></img>

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
          <p>Leite fresco , Cloreto de sódio (sal), cloreto de cálcio, e coagulante. O ponto da massa é o segredo da qualidade.</p>
        </div>
      </div>

    </section >
  );
};
