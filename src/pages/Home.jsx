import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="hero fade-in">
        <h1>🐾 Bienvenidos a PawShop</h1>
        <p>Encuentra tu compañero ideal</p>
        <div className="hero-buttons">
          <Link to="/perros" className="btn">Ver Perros</Link>
          <Link to="/gatos" className="btn">Ver Gatos</Link>
        </div>
      </div>

      <section className="sobre-nosotros fade-in-up">
        <h2>Quiénes somos</h2>
        <p>
          En PawShop creemos que cada mascota merece un hogar lleno de amor.
          Desde 2021 conectamos familias con perros y gatos sanos, vacunados
          y listos para formar parte de su día a día. Nuestro equipo cuida
          cada detalle del proceso, desde la selección hasta la adopción,
          para que encuentres a tu compañero ideal con total confianza.
        </p>
      </section>

      <section className="stats fade-in-up">
        <div className="stat-item">
          <h3>150+</h3>
          <p>Mascotas adoptadas</p>
        </div>
        <div className="stat-item">
          <h3>5</h3>
          <p>Años de experiencia</p>
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Clientes felices</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Atención disponible</p>
        </div>
      </section>

      <section className="features">
        <h2>¿Por qué elegirnos?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>❤️ Animales sanos y vacunados</h3>
            <p>Todas nuestras mascotas pasan por un chequeo veterinario completo y cuentan con su esquema de vacunación al día antes de llegar a su nuevo hogar.</p>
          </div>
          <div className="feature">
            <h3>🚚 Envío seguro</h3>
            <p>Trasladamos a tu nueva mascota en condiciones cómodas y seguras, con todas las medidas necesarias para que el viaje no le genere estrés.</p>
          </div>
          <div className="feature">
            <h3>🩺 Asesoría veterinaria</h3>
            <p>No te dejamos solo después de la adopción: nuestro equipo te brinda orientación veterinaria para que sepas cómo cuidar a tu mascota desde el primer día.</p>
          </div>
        </div>
      </section>
    </div>
  );
}