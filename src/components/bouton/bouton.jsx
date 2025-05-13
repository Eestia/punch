import './bouton.css';

// ici on viens chercher 3 props depuis l'app.jsx, les point de vie, la fonction onPunch et la fonction OnRestart
export default function Bouton({ hp, onPunch, onRestart }) { 
  return (
    <section className="button-container">
      {hp > 0 ? (
        <button onClick={onPunch}>Frapper</button>
      ) : (
        <button onClick={onRestart}>Rejouer</button>
      )}
    </section>
  );
}
// on met une fonction ternaire
// si hp > 0 nlop est vivant et le bouton seras donc Frapper, elle apelle la fonction Onpunch qui enleve 10Pv 
// sinon , blop est mort , le bouton deviens rejouer et apelle la fonction onRestart qui initie les pv a 100 