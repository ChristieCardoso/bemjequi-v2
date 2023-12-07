
import "./Footer.scss";
import bg from '../../assets/footer-banner.jpg';
import bk from '../../assets/queijo.png';

import Form from "./Form/Form";
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';


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
              <ul className="wrapper">
                <li className="icon whatsapp">
                  <i onClick={handleWhatsAppClick}><BsWhatsapp /></i>
                </li>
                <li className="icon whatsapp">
                  <i onClick={handleWhatsAppClick}><BsInstagram /></i>
                </li>
                <li className="icon whatsapp">
                  <a><BsFacebook src="https://www.instagram.com/" /></a>
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