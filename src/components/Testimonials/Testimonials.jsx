import "./Testimonials.scss";

export const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h1 className="testimonialsHeader">Avaliações</h1>
        <div className="testimonialsAll">
          <div className="testimonialsDetails">
            <img className="bgImg" src='https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/f0hvmf3fkyd2ucxins4q' alt="Cliente Valdey" />
            <h1>Valdey Santos</h1>
            <p>
              Gostei muito do queijo, produto de qualidade, virei cliente.
            </p>
          </div>

          <div className="testimonialsDetails">
            <img className="bgImg" src='https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/pgzywhoix9zumdftuism' alt="Cliente Lais" />
            <h1>Lais Lima</h1>
            <p>
              Melhor queijo da região!!! Sabor incrível e preço muito acessível, recomendo muito a compra!!
            </p>
          </div>

          <div className="testimonialsDetails">
            <img className="bgImg" src='https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/lqa9pkwnws5pzd3tipbl' alt="Cliente Carlos" />
            <h1>Carlos Silva</h1>
            <p>
              Eu experimentei o queijo cozido dessa página e simplesmente amei! Ele é muito saboroso e tem uma textura incrível.
            </p>
          </div>
        </div>
        <a className="testimonialsBtn" href="https://www.facebook.com/bemjequi" target="_blank" rel="noreferrer"><span className="tBtnspan">Deixe sua avaliação</span></a>
      </div>
    </section>
  );
};

