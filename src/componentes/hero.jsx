import { useState, useEffect } from 'react';
import '../estilos/hero.css';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Bienvenidos a Hogar Santa Lucía",
      subtitle: "Donde tus seres queridos reciben atención, respeto y cariño",
      description: "Más de 35 años brindando cuidado integral y profesional"
    },
    {
      title: "Atención Profesional 24 Horas",
      subtitle: "Equipo médico especializado en geriatría",
      description: "Cuidado continuo con personal calificado y comprometido"
    },
    {
      title: "Un Hogar Cálido y Seguro",
      subtitle: "Ambiente familiar para el bienestar de nuestros residentes",
      description: "Instalaciones diseñadas para la comodidad y seguridad"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id='hero'>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {slides[currentSlide].title}
          </h1>
          <p className="hero-subtitle">
            {slides[currentSlide].subtitle}
          </p>
          <p className="hero-description">
            {slides[currentSlide].description}
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('servicios')}
            >
              Conocé nuestros servicios
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('contacto')}
            >
              Contactanos
            </button>
          </div>
        </div>
        
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;