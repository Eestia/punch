import './img.css';
import blob from '../../assets/blob.png';
import dead from '../../assets/dead.png';
import aie from '../../assets/aie.png'; 
import { useEffect, useState } from 'react';

export default function Img({ hp }) {
  const [bounce, setBounce] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (hp > 0) {
      setBounce(true);
      setIsBlinking(true);
      const bounceTimer = setTimeout(() => setBounce(false), 300);
      const blinkTimer = setTimeout(() => setIsBlinking(false), 200);
      return () => {
        clearTimeout(bounceTimer);
        clearTimeout(blinkTimer);
      };
    }
  }, [hp]);

  let imageToShow;
  if (hp <= 0) {
    imageToShow = dead;
  } else if (isBlinking) {
    imageToShow = aie; 
  } else {
    imageToShow = blob;
  }

  return (
    <section className="img-container">
      <img
        src={imageToShow}
        alt="blop"
        className={bounce ? 'bounce' : ''}
      />
    </section>
  );
}
