import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';

import "./Footer.scss";

export const Footer = () => {
  const handleWhatsAppClick = () =>
    window.open("https://api.whatsapp.com/send?phone=31993034536", "_blank");

  return (
    <footer
      id="footer"
      className="footer bgImg"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/cdc2m8doqpfpdyywwkn7)` }}
    >
      <div className="container">
        <div className="footerContainer">

          <div className="footerSocial">
            <img src='https://res.cloudinary.com/dmvm1mlgv/image/upload/f_auto,q_auto/v1/Landing-Page%20-%20BemJequi/q9qpjemb4kmt26rgltl4' alt="Logo do Bem Jequi" />
            <div>
              <ul className="iconContainer">
                <li className="icon whats">
                  <i onClick={handleWhatsAppClick}><BsWhatsapp /></i>
                </li>
                <li className="icon insta">
                  <a href="https://www.instagram.com/bemjequi" target="_blank" rel="noopener noreferrer">
                    <BsInstagram />
                  </a>
                </li>
                <li className="icon facebook">
                  <a href="https://www.facebook.com/bemjequi" target="_blank" rel="noopener noreferrer">
                    <BsFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footerInfo">
            <h1>Fale com a Bem Jequi</h1>
            <p>Endereço: Almenara - MG </p>
            <p>Telefone: (31) 9 9303-4536</p>
            <p>E-mail: bemjequi@gmail.com</p>
            <p>Seg à Sex: 17h às 20h | Sábado: 10h às 17h</p>
          </div>

        </div>
        <p className="license">©2020. Todos os direitos reservados para Laticínios Bem Jequi.</p>
      </div>
    </footer>
  )
}