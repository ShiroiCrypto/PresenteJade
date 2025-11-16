// src/components/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  // Estado para controlar se a Bobina de Tesla está ligada
  const [isTeslaOn, setIsTeslaOn] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const [audioError, setAudioError] = useState(null);
  
  // Referência para o elemento de áudio (a música de Crepúsculo)
  const audioRef = useRef(null);

  // A função que liga/desliga a Bobina e a música
  const toggleTesla = () => {
    setIsTeslaOn(prev => !prev);
  };

  // Verifica se o áudio está disponível ao carregar
  useEffect(() => {
    if (audioRef.current) {
      const handleCanPlay = () => {
        setAudioAvailable(true);
        setAudioError(null);
        console.log('Áudio carregado e pronto para tocar');
      };
      
      const handleLoadedMetadata = () => {
        setAudioAvailable(true);
        setAudioError(null);
      };
      
      const handleError = (e) => {
        setAudioAvailable(false);
        const errorMsg = audioRef.current.error;
        if (errorMsg) {
          // Erro 4 = MEDIA_ERR_SRC_NOT_SUPPORTED ou arquivo não encontrado
          if (errorMsg.code === 4 || errorMsg.code === 1) {
            setAudioError('Arquivo de áudio não encontrado. Para adicionar música, coloque um arquivo chamado "clair_de_lune.mp3" na pasta public/');
          } else {
            setAudioError('Erro ao carregar áudio. Verifique o formato do arquivo.');
          }
        } else {
          setAudioError('Arquivo de áudio não encontrado. Adicione clair_de_lune.mp3 na pasta public/');
        }
        console.error('Erro ao carregar áudio:', errorMsg);
      };
      
      // Tenta carregar os metadados do áudio
      audioRef.current.addEventListener('canplay', handleCanPlay);
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('error', handleError);
      
      // Força o carregamento dos metadados
      audioRef.current.load();
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('canplay', handleCanPlay);
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, []);

  // Controla a reprodução do áudio
  useEffect(() => {
    if (audioRef.current && audioAvailable) {
      if (isTeslaOn) {
        // Tenta tocar a música
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Música iniciada com sucesso');
            })
            .catch(error => {
              console.error('Erro ao reproduzir áudio:', error);
              // Alguns navegadores bloqueiam autoplay - usuário precisa interagir primeiro
              if (error.name === 'NotAllowedError') {
                setAudioError('Clique no botão novamente para permitir o áudio');
              }
            });
        }
      } else {
        // Pausa a música e volta para o início
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isTeslaOn, audioAvailable]);

  return (
    <div className={`home-container ${isTeslaOn ? 'tesla-on' : 'tesla-off'}`}>
      
      {/* O áudio deve ser um arquivo que você vai adicionar à pasta 'public'
        (Ex: public/bellas_lullaby.mp3).
      */}
      <audio 
        ref={audioRef} 
        src="/clair_de_lune.mp3" 
        loop 
        preload="metadata"
        aria-label="Música de fundo - Clair de Lune"
      />

      <div className="tesla-content">
        <h1>Bem-vinda a Forks</h1>
        <p>Pressione para ligar a Bobina de Tesla Musical e iniciar a melodia.</p>

        {audioError && (
          <p style={{ 
            fontSize: '0.9em', 
            color: '#ff6b6b', 
            marginTop: '10px',
            padding: '10px',
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
            borderRadius: '5px',
            border: '1px solid rgba(255, 107, 107, 0.3)'
          }}>
            {audioError}
          </p>
        )}

        <button 
          className={`tesla-button ${isTeslaOn ? 'active' : ''}`}
          onClick={toggleTesla}
          aria-label={isTeslaOn ? 'Desligar música' : 'Ligar Bobina de Tesla e música'}
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