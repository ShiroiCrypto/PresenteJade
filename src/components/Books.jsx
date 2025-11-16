// src/components/Books.jsx
import React from 'react';
import './Books.css';

const Books = () => {
  return (
    <div className="books-container">
      <h2>📖 A Biblioteca dos Mundos Ocultos e Reais</h2>
      
      {/* Seção 1: Cassandra Clare & Shadowhunters */}
      <div className="author-section shadowhunters-section">
        <h3>🌙 Cassandra Clare: O Mundo das Sombras</h3>
        <p className="author-bio">"Todos os contos de fadas são verdadeiros. Mas eles não são reais."</p>

        <div className="details-grid">
          <div className="detail-card">
            <h4>Autora Favorita</h4>
            <p>Cassandra Clare</p>
          </div>
          <div className="detail-card">
            <h4>Personagem Favorito</h4>
            {/* Simon Lewis é um Demissexual/Assexual (cânone na série) - Ótima conexão! */}
            <p className="highlight-text">Simon Lewis</p>
            <small>Da série Instrumentos Mortais, o Daylighter.</small>
          </div>
          <div className="detail-card">
            <h4>Livro para Reler</h4>
            {/* A referência ao livro "15 Dias" */}
            <p className="highlight-text">15 Dias</p>
          </div>
        </div>
      </div>

      {/* Seção 2: Alice Oseman & Leitura Atualmente */}
      <div className="author-section oseman-section">
        <h3>🌱 Alice Oseman: Romance e Identidade</h3>
        <p className="author-bio">"A vida é melhor com honestidade e chá quente."</p>
        
        <div className="current-read">
          <h4>Lendo Atualmente:</h4>
          {/* Referência ao livro que ela está lendo */}
          <p className="current-title">"O azul daqui é mais azul"</p>
          <small>Onde o foco está na jornada interior.</small>
        </div>

        <button className="book-button">
          Ver Citações Favoritas
        </button>
      </div>
      
    </div>
  );
};

export default Books;