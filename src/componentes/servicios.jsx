import { useEffect } from 'react';
import '../estilos/servicios.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importar iconos
import logoEnf from '../imagenes/enfermeria.png';
import logo24h from '../imagenes/24-horas.png';
import logoSeg from '../imagenes/camara.png';
import logoDibujo from '../imagenes/dibujo.png';
import logoTejido from '../imagenes/tejido.png';
import logoGim from '../imagenes/gimnasia.png';
import logoPsicologia from '../imagenes/psicologia.png';

function Servicios() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const servicios = [
    {
      icon: logo24h,
      title: "Atención 24hs",
      description: "Cuidado continuo las 24 horas del día, los 365 días del año",
      alt: "servicio 24hs"
    },
    {
      icon: logoEnf,
      title: "Servicio de Enfermería",
      description: "Personal de enfermería especializado en geriatría",
      alt: "servicio enfermeria"
    },
    {
      icon: logoPsicologia,
      title: "Servicio de Psicología",
      description: "Apoyo psicológico y acompañamiento emocional",
      alt: "Psicologia"
    },
    {
      icon: logoSeg,
      title: "Seguridad",
      description: "Sistema de seguridad y monitoreo para tu tranquilidad",
      alt: "seguridad"
    },
    {
      icon: logoDibujo,
      title: "Terapia de Arte",
      description: "Actividades de dibujo y expresión artística",
      alt: "Dibujo"
    },
    {
      icon: logoTejido,
      title: "Actividades Manuales",
      description: "Talleres de tejido y manualidades",
      alt: "Tejido"
    },
    {
      icon: logoGim,
      title: "Gimnasia Terapéutica",
      description: "Ejercicios adaptados para mantener la movilidad",
      alt: "Gimnasia"
    }
  ];

  return (
    <section id="servicios" className="servicios-section">
      <div className="franja" data-aos="fade-down">
        <h2 className="servicios-title">Nuestros Servicios</h2>
        <p className="servicios-subtitle">
          Cuidado integral para el bienestar de nuestros residentes
        </p>
      </div>
      
      <div className="servicios-container">
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div 
              key={index}
              className="servicio-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="servicio-icon">
                <img 
                  src={servicio.icon} 
                  alt={servicio.alt}
                />
              </div>
              <h3 className="servicio-title">{servicio.title}</h3>
              <p className="servicio-description">{servicio.description}</p>
            </div>
          ))}
        </div>
        
        <div className="servicios-cta" data-aos="fade-up" data-aos-delay="700">
          <h3>¿Necesitas más información?</h3>
          <p>Contáctanos para conocer todos nuestros servicios en detalle</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Información
          </button>
        </div>
      </div>
    </section>
  );
}

export default Servicios;