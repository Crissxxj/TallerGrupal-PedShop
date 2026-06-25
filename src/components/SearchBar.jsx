import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onBuscar, placeholder }) {
  const [texto, setTexto] = useState('');

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setTexto(valor);
    onBuscar(valor);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder || "Buscar..."}
        value={texto}
        onChange={manejarCambio}
        className="search-input"
      />
    </div>
  );
}