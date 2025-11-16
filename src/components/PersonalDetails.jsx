// src/components/PersonalDetails.jsx
import React from 'react';
import './PersonalDetails.css';

const PersonalDetails = () => {
  return (
    <div className="personal-details-card">
      <h3>Elementos de Conexão 🔗</h3>
      
      <div className="details-grid-small">
        
        <div className="detail-item color-detail">
          <h4>Cor do Mundinho</h4>
          <p>Roxo & Marrom</p>
          <div className="color-swatch-container">
            <div className="color-swatch purple-swatch"></div>
            <div className="color-swatch brown-swatch"></div>
          </div>
        </div>

        <div className="detail-item food-detail">
          <h4>Conforto em Forks</h4>
          <p>Strogonoff 🍲</p>
          <small>Perfeito para um dia chuvoso.</small>
        </div>

        <div className="detail-item character-detail">
          <h4>Personagem Espelho</h4>
          {/* Destaque para a identidade de Simon Lewis */}
          <p className="highlight-simon">Simon Lewis</p>
          <small>Da luz do dia à noite, uma conexão real.</small>
        </div>
        
      </div>
      <p className="note-identity">
        A beleza está na combinação única dos mundos.
      </p>
    </div>
  );
};

export default PersonalDetails;