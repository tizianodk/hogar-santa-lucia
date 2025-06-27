import React, { useState, useEffect } from 'react';
import '../estilos/navbar.css';
import logo from '../imagenes/nombre_geriatrico.PNG';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  const menuItems = [
    { id: 'hero', label: 'Inicio', href: 'inicio' },
    { id: 'acerca', label: 'Sobre Nosotros', href: 'AcercaDeNosotros' },
    { id: 'instalaciones', label: 'Instalaciones', href:  'Instalaciones'},
    { id: 'servicios', label: 'Servicios', href: 'servicios' },
    { id: 'contacto', label: 'Contacto', href: 'contacto' }
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src={logo} 
            alt="Geriátrico Santa Lucía" 
            onClick={() => scrollToSection('hero')}
          />
        </div>
        
        <div className="nav-header">
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >☰
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Overlay para cerrar el menú mobile */}
        {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
}

export default NavBar;