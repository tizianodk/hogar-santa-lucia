import '../estilos/instalaciones.css'
import imagen1 from '../imagenes/instalaciones/imagen8.png'
import imagen3 from '../imagenes/instalaciones/imagen6.png'
import imagen4 from '../imagenes/instalaciones/imagen5.png'
import imagen5 from '../imagenes/instalaciones/imagen4.png'
import imagen6 from '../imagenes/instalaciones/imagen3.png'
import imagen7 from '../imagenes/instalaciones/imagen2.png'
import imagen8 from '../imagenes/instalaciones/imagen1.png'

function Instalaciones(){
    // Array de instalaciones con información adicional (opcional)
    const instalaciones = [
        {
            imagen: imagen8,
            titulo: "Entrada Principal",
        },
        {
            imagen: imagen6,
            titulo: "Sala de Espera",
        },
        {
            imagen: imagen5,
            titulo: "Pasillo Habitaciones",
        },
        {
            imagen: imagen1,
            titulo: "Habitacion 1",
        },
        {
            imagen: imagen4,
            titulo: "Habitacion 2",
        },
        {
            imagen: imagen3,
            titulo: "Habitacion 3",
        },
    ];

    return(
        <div className="instalaciones-section" id='instalaciones'>
            <div className="franja-instalaciones" data-aos='fade-down'>
                <h1 className="acerca-title">Conoce Nuestras Instalaciones</h1>
                <p className="acerca-subtitle">Espacios equipados pensados para tu comodidad y bienestar</p>
            </div>
            
            <div className='instalaciones'>
                {instalaciones.map((instalacion, index) => (
                    <div key={index} className='imagenes-instalaciones' data-aos='fade-up' data-aos-delay={index * 100}>
                        <img 
                            src={instalacion.imagen} 
                            alt={instalacion.titulo}
                            loading="lazy"
                        />
                        <div className="imagen-overlay" data-aos='fade-up'  data-aos-delay={index * 100}>
                            <h4>{instalacion.titulo}</h4>
                            <p>{instalacion.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section opcional */}
            <div className="instalaciones-cta" data-aos='fade-up'>
                <h3>¿Te gustaría conocer nuestras instalaciones?</h3>
                <p>Visitanos y conocé un espacio cálido, seguro y adaptado a cada necesidad.</p>
            </div>
        </div>
    )
}

export default Instalaciones;