import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineLibraryBooks, MdHotelClass } from 'react-icons/md';
import { LiaCheeseSolid } from "react-icons/lia";
import { GrContact } from 'react-icons/gr';

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home">
          <div className="logo">Bem Jequi</div>

        </a>
        <div className="menuItems">
          <a href="#home">
            <div className="menuItem">Home</div>
          </a>
          <a href="#about">
            <div className="menuItem">Sobre</div>
          </a>
          <a href="#Product">
            <div className="menuItem">Produto</div>
          </a>
          <a href="#testimonials">
            <div className="menuItem">Avaliações</div>
          </a>
          <a href="#contact">
            <div className="menuItem">Contato</div>
          </a>
        </div>
      </nav>

      <nav className="mobileNavbar">
        <div className="mobileItems">
          <a href="#home">
            <div className="mobileItem"><AiOutlineHome /></div>
          </a>
          <a href="#about">
            <div className="mobileItem"><MdOutlineLibraryBooks /></div>
          </a>
          <a href="#Product">
            <div className="mobileItem"><LiaCheeseSolid /></div>
          </a>
          <a href="#testimonials">
            <div className="mobileItem"><MdHotelClass /></div>
          </a>
          <a href="#contact">
            <div className="mobileItem"><GrContact /></div>
          </a>
        </div>
      </nav>

    </header>
  );
};
