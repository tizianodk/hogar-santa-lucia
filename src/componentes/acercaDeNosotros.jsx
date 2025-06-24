import '../estilos/acercaDeNosotros.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function AcercaDeNosotros() {

 
    AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
    });


    return (
      <>
      <strong style={{marginBottom:'0',display:'flex', color:'white', justifyContent:'center',alignItems:'center', backgroundColor:'darkslategray', width:'100%', height:'70px'}} data-aos='zoom-in'><h1>Acerca de Nosotros</h1></strong> 
      <section className="acerca" style={{ padding: '2rem 1rem', textAlign: 'center'}} data-aos='zoom-in' >  
        <div className='imagen'>
        </div>
        <div className='texto' style={{float:'right',fontSize:'18px' ,color:'black' ,height:'418px', display:'flex',flexDirection:'column' ,justifyContent:'center'}}>
            <br />
            <strong><p style={{ maxWidth: '700px', margin: '1rem auto', lineHeight: '1.6'}}>
              Desde hace más de 35 años, en <strong>Geriátrico Santa Lucia</strong> brindamos un espacio de cuidado,
              contención y respeto para nuestros adultos mayores. Nuestra misión es ofrecer una atención integral,
              profesional y humana, garantizando la calidad de vida y el bienestar de cada residente.
            </p>
            <p style={{ maxWidth: '700px', margin: '1rem auto', marginLeft:'1rem',marginRight:'1rem',lineHeight: '1.6' }}>
              Contamos con un equipo interdisciplinario comprometido con el acompañamiento diario, en un entorno cálido,
              familiar y seguro. Creemos que el respeto, el cariño y la atención personalizada son fundamentales para
              envejecer con dignidad.
            </p></strong>
        </div>
      </section>
      </>
    )
  }
  
  export default AcercaDeNosotros