// src/components/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Home.css'; // Vamos criar este arquivo de estilo

const Home = () => {
  // Estado para controlar se a Bobina de Tesla está ligada
  const [isTeslaOn, setIsTeslaOn] = useState(false);
  
  // Referência para o elemento de áudio (a música de Crepúsculo)
  const audioRef = useRef(null);

  // A função que liga/desliga a Bobina e a música
  const toggleTesla = () => {
    setIsTeslaOn(prev => !prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isTeslaOn) {
        // Toca a música, idealmente "Bella's Lullaby"
        audioRef.current.play();
      } else {
        // Pausa a música e volta para o início
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isTeslaOn]);

  return (
    <div className={`home-container ${isTeslaOn ? 'tesla-on' : 'tesla-off'}`}>
      
      {/* O áudio deve ser um arquivo que você vai adicionar à pasta 'public'
        (Ex: public/bellas_lullaby.mp3).
      */}
      <audio ref={audioRef} src="/bellas_lullaby.mp3" loop />

      <div className="tesla-content">
        <h1>Bem-vinda a Forks</h1>
        <p>Pressione para ligar a Bobina de Tesla Musical e iniciar a melodia.</p>

        <button 
          className={`tesla-button ${isTeslaOn ? 'active' : ''}`}
          onClick={toggleTesla}
        >
          {isTeslaOn ? '⚡ Desligar Música' : 'Ligar Bobina ⚡'}
        </button>
      </div>

      {/* Efeito de Brilho quando ligado */}
      {isTeslaOn && <div className="tesla-glow-overlay"></div>}
    </div>
  );
};

export default Home;