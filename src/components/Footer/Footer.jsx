
import "./Footer.scss";
import bg from '../../assets/footer-banner.jpg';
import Form from "./Form/Form";


export const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer bgImg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="footerInfo">
          <div className="footerDetails">
            <h1>Services</h1>
            <a href="#home">
              <p>Delivery</p>
            </a>
            <a href="#Product">
              <p>Pricing</p>
            </a>
          </div>
          <div className="footerDetails">
            <h1>Information</h1>
            <a href="#contact">
              <p>Contact us</p>
            </a>
            <a href="#home">
              <p>Terms of services</p>
            </a>
          </div>
          <div className="footerDetails" >
            <Form />
          </div>
        </div>
        <p className="license">©2020. Todos os direitos reservados para Laticínios Bem Jequi.</p>
      </div>
    </footer>
  );
};
