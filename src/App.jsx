//import Contacto from './componentes/contacto.jsx'
import AcercaDeNosotros from './componentes/acercaDeNosotros.jsx'
import Footer from './componentes/footer.jsx'
import Hero from './componentes/hero.jsx'
import NavBar from './componentes/navbar.jsx'
import Servicios from './componentes/servicios.jsx'
import Ubicacion_Contacto from './componentes/ubicacion.jsx'
import './index.css'

function App() {
  return (
    <div className="container">
      <NavBar />
      <main className="main">
        <Hero />
        <AcercaDeNosotros/>
        <Servicios/>
        <div className='ubi_contacto' >
          <Ubicacion_Contacto/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App