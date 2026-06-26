import { useState } from 'react';
import './FiltroPrecio.css';

export default function FiltroPrecio({ onFiltrar }) {
  const [rango, setRango] = useState('todos');

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setRango(valor);
    onFiltrar(valor);
  };

  return (
    <div className="filtro-precio">
      <label htmlFor="filtro">Filtrar por precio: </label>
      <select id="filtro" value={rango} onChange={manejarCambio} className="filtro-select">
        <option value="todos">Todos</option>
        <option value="bajo">Menos de $300</option>
        <option value="medio">$300 - $400</option>
        <option value="alto">Más de $400</option>
      </select>
    </div>
  );
}
