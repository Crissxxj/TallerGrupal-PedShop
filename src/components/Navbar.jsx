import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>🐾 PawShop</h2>
        </Link>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">Inicio</NavLink>
        <NavLink to="/perros" className="nav-link">Perros</NavLink>
        <NavLink to="/gatos" className="nav-link">Gatos</NavLink>
      </div>
    </nav>
  );
}