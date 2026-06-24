import { gatos } from '../data/pets';
import PetCard from '../components/PetCard';

export default function Gatos() {
  return (
    <div className="page">
      <h1>🐱 Nuestros Gatos</h1>
      <div className="pets-grid">
        {gatos.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}
