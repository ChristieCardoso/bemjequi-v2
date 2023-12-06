import "./Testimonials.scss";
import val from '../../assets/val.jpg'
import lais from '../../assets/lais.jpg'
import carlos from '../../assets/calor.jpg'

export const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h1 className="testimonialsHeader">Avaliações</h1>
        <div className="testimonialsAll">
          <div className="testimonialsDetails">
            <img className="bgImg" src={val} alt="" />
            <h1>Valdey Santos</h1>
            <p>
              Gostei muito do queijo, produto de qualidade, virei cliente.
            </p>
          </div>

          <div className="testimonialsDetails">
            <img className="bgImg" src={lais} alt="" />
            <h1>Lais Lima</h1>
            <p>
              Melhor queijo da região!!! Sabor incrível e preço muito acessível, recomendo muito a compra!!
            </p>
          </div>

          <div className="testimonialsDetails">
            <img className="bgImg" src={carlos} alt="" />
            <h1>Carlos Silva</h1>
            <p>
              Eu experimentei o queijo cozido dessa página e simplesmente amei! Ele é muito saboroso e tem uma textura incrível.
            </p>
          </div>
        </div>
        <a className="bn31" href="https://www.facebook.com/bemjequi/reviews" target="_blank" rel="noreferrer"><span className="bn31span">Deixe sua avaliação</span></a>
      </div>
    </section>
  );
};

