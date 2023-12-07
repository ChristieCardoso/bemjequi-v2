import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import bg from '../../assets/footer-banner.jpg';
import bk from '../../assets/queijo.png';
import Form from "./Form/Form";

import "./Footer.scss";

export const Footer = () => {
  const handleWhatsAppClick = () =>
    window.open("https://api.whatsapp.com/send?phone=31995363463", "_blank");

  return (
    <footer
      id="footer"
      className="footer bgImg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="footerContainer">
          <div className="footerInfo">
            <h1>Fale com a Bem Jequi</h1>
            <p>Endereço: 123 Rua Principal, Cidade, Estado</p>
            <p>Telefone: (31) 9 9536-3463</p>
            <p>E-mail: contato@empresa.com</p>
            <p>Seg à Sex: 8h às 18h | Sábado: 8h às 12h</p>
          </div>

          <div className="footerSocial">
            <img src={bk} alt="" />
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

          <div className="footerForm" >
            <Form />
          </div>

        </div>
        <p className="license">©2020. Todos os direitos reservados para Laticínios Bem Jequi.</p>
      </div>

    </footer>
  )
}