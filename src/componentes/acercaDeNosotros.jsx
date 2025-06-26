import '../estilos/acercaDeNosotros.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import imagen2 from '../imagenes/imagen2.jpg'
import cuidadoHum from '../imagenes/cuidado.png'
import personalProf from '../imagenes/personal.png'
import familia from '../imagenes/familia.png'

function AcercaDeNosotros() {

    AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
    });

    return (
        <>
            {/* Franja del título */}
            <div id='acerca' className="franja-acerca" data-aos='fade-down'>
                <h1 className="acerca-title">Acerca de Nosotros</h1>
                <p className="acerca-subtitle">Más de 35 años cuidando con amor y profesionalismo</p>
            </div>

            {/* Sección principal */}
            <section className="acerca-section" data-aos='fade-up'>
                <div className="acerca-container">
                    
                    {/* Imagen */}
                    <div className="acerca-imagen" data-aos='fade-right' data-aos-delay='200'>
                        <div className="imagen-overlay">
                            <img src={imagen2} alt="imagen"/>
                            <div className="experiencia-badge">
                                <h2><span className="experiencia-numero">+35</span>
                                <span className="experiencia-texto"> Años de Experiencia</span></h2>
                            </div>
                        </div>
                    </div>

                    {/* Contenido de texto */}
                    <div className="acerca-contenido" data-aos='fade-left' data-aos-delay='400'>
                        <div className="contenido-header">
                            <div className="decorative-line"></div>
                            <h2 className="contenido-title">Hogar Santa Lucía</h2>
                            <div className="decorative-line"></div>
                        </div>

                        <div className="texto-principal">
                            <p className="parrafo-destacado">
                                Desde hace más de 35 años, brindamos un espacio de cuidado,
                                contención y respeto para nuestros adultos mayores. Nuestra misión es ofrecer una atención integral,
                                profesional y humana, garantizando la calidad de vida y el bienestar de cada residente.
                            </p>
                            
                            <p className="parrafo-secundario">
                                Contamos con un equipo interdisciplinario comprometido con el acompañamiento diario, en un entorno cálido,
                                familiar y seguro. Creemos que el respeto, el cariño y la atención personalizada son fundamentales para
                                envejecer con dignidad.
                            </p>
                        </div>

                        {/* Valores destacados */}
                        <div className="valores-grid" data-aos='fade-up' data-aos-delay='600'>
                            <div className="valor-item">
                                <div className="valor-icon">
                                  <img src={cuidadoHum} alt="" style={{width:"40px", height:'40px'}} />
                                    <i className="fas fa-heart"></i>
                                </div>
                                <h5>Cuidado Humano</h5>
                            </div>
                            <div className="valor-item">
                                <div className="valor-icon">
                                    <img src={personalProf} alt="" style={{width:"40px", height:'40px'}} />
                                    <i className="fas fa-users"></i>
                                </div>
                                <h5>Equipo Profesional</h5>
                            </div>
                            <div className="valor-item">
                                <div className="valor-icon">
                                    <img src={familia} alt="" style={{width:"40px", height:'40px'}} />
                                    <i className="fas fa-home"></i>
                                </div>
                                <h5>Ambiente Familiar</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AcercaDeNosotros