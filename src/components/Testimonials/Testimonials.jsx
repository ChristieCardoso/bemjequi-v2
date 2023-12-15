import "./Testimonials.scss";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Valdey Santos",
    text: "Gostei muito do queijo, produto de qualidade, virei cliente.",
    img: "https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/f0hvmf3fkyd2ucxins4q",
  },
  {
    id: 2,
    name: "Carlos Silva",
    text: " Eu experimentei o queijo cozido dessa página e simplesmente amei! Ele é muito saboroso e tem uma textura incrível.",
    img: "https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/lqa9pkwnws5pzd3tipbl",
  },
  {
    id: 3,
    name: "Lais Lima",
    text: " Melhor queijo da região!!! Sabor incrível e preço muito acessível, recomendo muito a compra!!",
    img: "https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/pgzywhoix9zumdftuism",
  },
  {
    id: 4,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

export const Testimonial = () => {
  var settings = {
    dots: true,
    slidesToShow: 3,
    arrows: false,
  };

  return (
    <section id="testimonials" className="testimonials" >
      <div className="container" >
        <h1 className="testimonialsHeader">Avaliações</h1>

        <Slider {...settings}>
          {testimonialData.map((data) => {
            return (
              <div key={data.id}>
                <div className="cardTestimonials">
                  <img className="cardImg" src={data.img} alt="" />
                  <h1 className="cardName">{data.name}</h1>
                  <p className="cardText">{data.text} </p>
                  <div className="starRating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <a className="testimonialsBtn" href="https://www.facebook.com/bemjequi" target="_blank" rel="noreferrer"><span className="tBtnspan">Deixe sua avaliação</span></a>
      </div>

    </section >
  );
};

