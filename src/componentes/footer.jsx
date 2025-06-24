import '../estilos/footer.css';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" style={{ height: '150px', display: 'flex', alignItems: 'center' }}>
      <div className="info_footer">
        <div className="social-icons">
          <a
            href="https://instagram.com/hogarsantalucia.original"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button ig"
          >
            <FaInstagram size={30} color="#C13584" />
            <p className="nombreIg">
              <strong>Instagram</strong>
            </p>
          </a>
          <a
            href="https://facebook.com/tuCuenta"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button fb"
          >
            <FaFacebook size={30} color="#3b5998" />
            <p className="nombreFb">
              <strong>Facebook</strong>
            </p>
          </a>
          <a
            href="https://wa.me/5493813860904"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button wpp"
          >
            <FaWhatsapp size={30} color="#25D366" />
            <p className="nombreWpp">
              <strong>WhatsApp</strong>
            </p>
          </a>
        </div>
      </div>
      <div className="copy">
        <p>&copy; 2025 Geriátrico Santa Lucía</p>
      </div>
    </footer>
  );
}

export default Footer;