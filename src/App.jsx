import { useState } from 'react';
import './App.css';
import Bar from './components/bar/bar';
import Bouton from './components/bouton/bouton';
import Img from './components/img/img';

export default function App() {
  const [hp, setHp] = useState(100);

  const handlePunch = () => {
  const sound = new Audio('/duck.mp3');
  sound.play();
  setHp(prev => Math.max(prev - 10, 0));
};

  const handleRestart = () => {
    setHp(100);
  };

  return (
    <>

      <video autoPlay loop muted className="background-video">
        <source src="/genshin.mp4" type="video/mp4" />
      </video>

      <section>
        <Bar hp={hp} />
        <Img hp={hp} />
        <Bouton hp={hp} onPunch={handlePunch} onRestart={handleRestart} />
      </section>
    </>
  );
}