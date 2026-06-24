export default function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <img src={pet.imagen} alt={pet.nombre} />
      <div className="card-content">
        <h3>{pet.nombre}</h3>
        <p className="raza">{pet.raza}</p>
        <p className="edad">{pet.edad}</p>
        <p className="descripcion">{pet.descripcion}</p>
        <p className="precio">${pet.precio}</p>
      </div>
    </div>
  );
}
