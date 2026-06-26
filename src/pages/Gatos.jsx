import { useState } from 'react';
import { gatos } from '../data/pets';
import PetCard from '../components/PetCard';
import FiltroPrecio from '../components/FiltroPrecio';

export default function Gatos() {
  const [rango, setRango] = useState('todos');

  const gatosFiltrados = gatos.filter(pet => {
    if (rango === 'bajo') return pet.precio < 300;
    if (rango === 'medio') return pet.precio >= 300 && pet.precio <= 400;
    if (rango === 'alto') return pet.precio > 400;
    return true;
  });

  return (
    <div className="page">
      <h1>🐱 Nuestros Gatos</h1>
      <FiltroPrecio onFiltrar={setRango} />
      <div className="pets-grid">
        {gatosFiltrados.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
      {gatosFiltrados.length === 0 && (
        <p className="sin-resultados">No se encontraron gatos en ese rango de precio.</p>
      )}
    </div>
  );
}
