import React, { useState } from 'react';
import '../estilos/navbar.css';
import logo from '../imagenes/nombre_geriatrico.PNG' ;



function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
        <img src={logo} alt="" style={{width:'200px', height:'100px' }}/>
        <div className="nav-header">
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
    </nav>
  );
}

export default NavBar;