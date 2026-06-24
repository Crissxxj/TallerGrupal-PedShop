import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>🐾 Bienvenidos a PedShop</h1>
        <p>Encuentra tu compañero ideal</p>
        <div className="hero-buttons">
          <Link to="/perros" className="btn">Ver Perros</Link>
          <Link to="/gatos" className="btn">Ver Gatos</Link>
        </div>
      </div>

      <section className="features">
        <h2>¿Por qué elegirnos?</h2>
        <div className="features-grid">
          <div className="feature">❤️ Animales sanos y vacunados</div>
          <div className="feature">🚚 Envío seguro</div>
          <div className="feature">🩺 Asesoría veterinaria</div>
        </div>
      </section>
    </div>
  );
}
