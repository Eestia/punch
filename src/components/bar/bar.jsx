import './bar.css';

export default function Bar({ hp }) {
  return (
    <section className="bar-container">
      <div className="bar" style={{ width: `${hp}%` }}></div>
    </section>
  );
}
// ici la barre feras la meme taille en largeur que ce qu'il nous reste de pv