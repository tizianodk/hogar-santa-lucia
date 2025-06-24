import '../estilos/servicios.css'
import logoEnf from '../imagenes/enfermeria.png'
import logo24h from '../imagenes/24-horas.png'
import logoSeg from '../imagenes/camara.png'
import logoDibujo from '../imagenes/dibujo.png'
import logoTejido from '../imagenes/tejido.png'
import logoGim from '../imagenes/gimnasia.png'
import logoPsicologia from '../imagenes/psicologia.png'

function Servicios(){
    return(
        <>
        <div className="franja">    
            <h1>Nuestros Servicios</h1>
        </div>
        <div className="servicios">
            <div className='logos'>
                <div style={{display:"flex", flexDirection:'column', textAlign:'center'}}>
                    <img src={logo24h} alt='servicio 24hs' style={{margin:'20px'}}/>Atencion 24hs
                </div>
                <div style={{display:"flex", flexDirection:'column', textAlign:'center'}}>
                    <img src={logoEnf} alt='servicio enfermeria' style={{margin:'20px'}}/>Servicio <br /> de <br /> Enfermeria 
                </div>
                <div style={{display:"flex", flexDirection:'column', textAlign:'center'}}>
                    <img src={logoPsicologia} alt="Psicologia" style={{margin:'20px'}}/>Servicio <br /> de <br /> Psicologia
                </div>
                <div style={{display:"flex", flexDirection:'column', textAlign:'center'}}>
                    <img src={logoSeg} alt="seguridad" style={{margin:'20px'}}/>Seguridad
                </div>
                <div style={{display:"flex", flexDirection:'column', textAlign:'center'}}>
                    <img src={logoDibujo} alt="Dibujo" style={{margin:'20px'}}/>Dibujo
                </div>
                <div style={{display:"flex", flexDirection:'column', textAlign:'center'}}>
                    <img src={logoTejido} alt="Tejido" style={{margin:'20px'}}/>Tejido
                </div>
                <div style={{display:"flex", flexDirection:'column', textAlign:'center'}}>
                    <img src={logoGim} alt="Gimnasia" style={{margin:'20px'}}/> Gimnasia
                </div>
            </div>
        </div>
        </>
    )

}

export default Servicios;