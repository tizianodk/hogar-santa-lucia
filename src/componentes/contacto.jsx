import { useForm, ValidationError } from '@formspree/react';
import '../estilos/contacto.css';

function Contacto() {
  const [state, handleSubmit] = useForm("mgvyryvb");

  if (state.succeeded) {
    return (
      <div className="formulario">
        <p className="mensaje-exito">¡Gracias por tu mensaje!</p>
      </div>
    );
  }

  return (
    <div className="formulario" style={{display:"flex", justifyContent:'center'}}>
      <form onSubmit={handleSubmit}>
        <h2><strong className="form-titulo">📩 Contacto</strong></h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          required
        />

        <label htmlFor="name">Nombre completo</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          required
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Enviame un mensaje..."
          required
        />

        <button type="submit" disabled={state.submitting}>
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default Contacto;