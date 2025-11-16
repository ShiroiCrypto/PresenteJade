// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="fog-overlay"></div>
      
      <div className="not-found-content">
        <div className="error-number">404</div>
        
        <h1 className="error-title">Você se perdeu na névoa de Forks...</h1>
        
        <p className="error-message">
          A página que você procura desapareceu na floresta escura, 
          como um vampiro na luz do dia.
        </p>
        
        <div className="error-quote">
          <p>"A névoa esconde muitos segredos..."</p>
        </div>
        
        <div className="navigation-links">
          <Link to="/" className="nav-button home-button">
            🏠 Voltar para Home
          </Link>
          
          <div className="quick-links">
            <Link to="/books" className="quick-link">📖 Livros</Link>
            <Link to="/music" className="quick-link">🎸 Música</Link>
            <Link to="/reflections" className="quick-link">💜 Diário</Link>
          </div>
        </div>
      </div>
      
      <div className="moon-glow"></div>
    </div>
  );
};

export default NotFound;

