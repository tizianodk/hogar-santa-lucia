import '../estilos/instalaciones.css'
import imagen1 from '../imagenes/instalaciones/imagen8.png'
import imagen2 from '../imagenes/instalaciones/imagen7.png'
import imagen3 from '../imagenes/instalaciones/imagen6.png'
import imagen4 from '../imagenes/instalaciones/imagen5.png'
import imagen5 from '../imagenes/instalaciones/imagen4.png'
import imagen6 from '../imagenes/instalaciones/imagen3.png'
import imagen7 from '../imagenes/instalaciones/imagen2.png'
import imagen8 from '../imagenes/instalaciones/imagen1.png'

function Instalaciones(){
    return(
        <>
            <div id='instalaciones' className="franja-instalaciones" data-aos='fade-down'>
                <h1 className="acerca-title">Conoce Nuestras Instalaciones</h1>
                {/*<p className="acerca-subtitle">Más de 35 años cuidando con amor y profesionalismo</p>*/}
            </div>
            <div className='instalaciones'>
                <div className='imagenes-instalaciones'><img src={imagen1} alt="imagen1"/></div>
                <div className='imagenes-instalaciones'><img src={imagen2} alt="imagen2"/></div>
                <div className='imagenes-instalaciones'><img src={imagen3} alt="imagen3"/></div>
                <div className='imagenes-instalaciones'><img src={imagen4} alt="imagen4"/></div>
                <div className='imagenes-instalaciones'><img src={imagen5} alt="imagen5"/></div>
                <div className='imagenes-instalaciones'><img src={imagen6} alt="imagen6"/></div>
                <div className='imagenes-instalaciones'><img src={imagen7} alt="imagen7"/></div>
                <div className='imagenes-instalaciones'><img src={imagen8} alt="imagen8"/></div>
            </div>
        </>
    )
}

export default Instalaciones;