import "./Testimonials.scss";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

export const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" >
        <h1 className="testimonialsHeader">Avaliações</h1>

        <Slider {...settings}>
          {testimonialData.map((data) => {
            return (
              <div key={data.id} className="TestimonialsContainer">
                <div className="cardtest">
                  <img className="cardimg" src={data.img} alt="" />
                  <p className="cardtext">{data.text}</p>
                  <h1 className="cardname">{data.name}</h1>

                </div>
              </div>
            );
          })}
        </Slider>
        <a className="testimonialsBtn" href="https://www.facebook.com/bemjequi" target="_blank" rel="noreferrer"><span className="tBtnspan">Deixe sua avaliação</span></a>
      </div>

    </section>
  );
};

