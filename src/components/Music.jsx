// src/components/Music.jsx
import React from 'react';
import './Music.css';

const Music = () => {
  return (
    <div className="music-container">
      <h2>🎸 A Playlist de Forks: Rock dos Imortais e Poesia 🤍</h2>
      
      <p className="music-intro">
        Do glamour do estádio de Wembley à melancolia de Sheffield e ao conforto lírico de *evermore*: a trilha sonora completa.
      </p>

      {/* Seção Taylor Swift (NOVA) */}
      <div className="band-section taylor-section">
        <h3>💖 Taylor Swift: Glitter, Pop e Autoaceitação (Lover Era)</h3>
        <p>A celebração da autoexpressão, do brilho e da alegria. Perfeito para se sentir poderosa!</p>
        <div className="song-list">
          {/* Músicas de álbuns mais alegres/celebratórios */}
          {['Lover', 'Cruel Summer', 'Shake It Off', 'You Need To Calm Down'].map(song => (
            <span key={song} className="song-tag taylor-tag">{song}</span>
          ))}
        </div>
        <a href="https://open.spotify.com/playlist/3e7GZGQAbu6NDcCwtjs3N4?si=LQeRsmdWS0Wg4L7I5oOoSg" target="_blank" rel="noopener noreferrer">
          <button className="music-button taylor-button">Ouvir o Hino Pop</button>
        </a>
      </div>

      {/* Seção Queen */}
      <div className="band-section queen-section">
        <h3>👑 Queen: Show dos Sonhos (Anos 80)</h3>
        <p>A era mais grandiosa. Pura energia de palco.</p>
        <div className="song-list">
          {['Bohemian Rhapsody', 'Somebody to Love', 'Don\'t Stop Me Now', 'We Will Rock You'].map(song => (
            <span key={song} className="song-tag queen-tag">{song}</span>
          ))}
        </div>
        <a href="https://open.spotify.com/playlist/37i9dQZF1E4vJDb4S6o3EK?si=IjcHyP3RT7OI7IuI0HwGrw" target="_blank" rel="noopener noreferrer">
          <button className="music-button queen-button">Ouvir a Vibe 80s</button>
        </a>
      </div>

      {/* Seção Arctic Monkeys */}
      <div className="band-section arctic-monkeys-section">
        <h3>🧊 Arctic Monkeys: Melancolia Indie</h3>
        <p>A trilha perfeita para caminhar na neblina ou pensar na vida.</p>
        <div className="song-list">
          {['Do I Wanna Know?', 'R U Mine?', 'I Bet You Look Good on the Dancefloor', '505'].map(song => (
            <span key={song} className="song-tag monkeys-tag">{song}</span>
          ))}
        </div>
        <a href="https://open.spotify.com/playlist/4RtcPxlXVMS541yDSLjWLb?si=PRUV4xnnRsS0DgXT-UltmA" target="_blank" rel="noopener noreferrer">
          <button className="music-button monkeys-button">Ouvir o Indie</button>
        </a>
      </div>
      
    </div>
  );
};

export default Music;