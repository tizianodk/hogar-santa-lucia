import React from 'react';
import '../estilos/footer.css';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      id: 'instagram',
      href: 'https://www.instagram.com/hogarsantalucia.orginal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: FaInstagram,
      label: 'Instagram',
      className: 'ig',
      color: '#C13584',
      ariaLabel: 'Visitar nuestro Instagram'
    },
    {
      id: 'facebook',
      href: 'https://www.facebook.com/share/19duN4Si5i/?mibextid=wwXIfr',
      icon: FaFacebook,
      label: 'Facebook',
      className: 'fb',
      color: '#3b5998',
      ariaLabel: 'Visitar nuestro Facebook'
    },
  ];

  /*const contactInfo = {
    phone: '+54 9 381 386-0904',
    email: 'info@geriatricosantalucia.com',
    address: 'México 1443, San Miguel de Tucumán'
  };*/

  const handleSocialClick = (platform) => {
    console.log(`Clicked on ${platform}`);
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        
        {/* Sección principal del footer */}
        <div className="footer-main">
          
          {/* Información de contacto */}


          {/* Redes sociales */}
          <div className="footer-section social-section">
            <h3 className="footer-title"><u>Síguenos</u></h3>
            <div className="social-icons">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-button ${social.className}`}
                    aria-label={social.ariaLabel}
                    onClick={() => handleSocialClick(social.label)}
                  >
                    <div className="social-icon-wrapper">
                      <IconComponent 
                        size={28} 
                        color={social.color}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="social-label">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Información adicional */}
          <div className="footer-section info-section">
            <h3 className="footer-title"><u>Geriátrico Santa Lucía</u></h3>
            <p className="footer-description">
              Brindamos cuidado especializado y atención integral para adultos mayores 
              con el compromiso de ofrecer calidad de vida en un ambiente cálido y profesional.
            </p>
            <div className="certifications">
              <span className="certification-badge">Habilitado por el Ministerio de Salud</span>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="footer-divider"></div>

        {/* Copyright y enlaces legales */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Geriátrico Santa Lucía. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5493813860904?text=Hola%2C%20me%20gustaria%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Hogar%20Santa%20Luc%C3%ADa.%20%C2%BFPodr%C3%ADan%20brindarme%20detalles%20sobre%20los%20servicios%20y%20disponibilidad%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={24} />
        <span className="whatsapp-tooltip">¿Necesitas Información?, Escribinos!</span>
      </a>
    </footer>
  );
}

export default Footer;