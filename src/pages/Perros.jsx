import { useState } from 'react';
import { perros } from '../data/pets';
import PetCard from '../components/PetCard';
import SearchBar from '../components/SearchBar';

export default function Perros() {
  const [busqueda, setBusqueda] = useState('');

  const perrosFiltrados = perros.filter(pet =>
    pet.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    pet.raza.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="page">
      <h1>🐶 Nuestros Perros</h1>
      <SearchBar onBuscar={setBusqueda} placeholder="Buscar por nombre o raza..." />
      <div className="pets-grid">
        {perrosFiltrados.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
      {perrosFiltrados.length === 0 && (
        <p className="sin-resultados">No se encontraron perros con ese criterio.</p>
      )}
    </div>
  );
}