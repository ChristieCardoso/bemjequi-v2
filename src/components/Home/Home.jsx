import { FiArrowRight } from "react-icons/fi";

import "./Home.scss";

export const Home = () => {
  const handleWhatsAppClick = () =>
    window.open("https://api.whatsapp.com/send?phone=31993034536", "_blank");
  return (
    <section id="home" className="home bgImg"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/zgpoepi3cxaqwyrcw07b)` }}
    >
      <div className="container">
        <div className='row'>
          <div className="content">
            <h3>O queijo perfeito: Sabor em cada pedaço!</h3>
            <p>
              Saboreie um pedaço do interior em cada mordida do nosso queijo, uma jornada de autenticidade e tradição.
            </p>
            <a onClick={handleWhatsAppClick} className="btn">
              Peça Já
              <FiArrowRight />
            </a>
          </div>

          <div className="image">
            <img src='https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/z9ethdzd4sfbicud5dya' alt="Imagem do queijo" />
          </div>
        </div>
      </div>
    </section>
  );
};
