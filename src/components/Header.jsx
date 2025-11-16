// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="ForksHeader">
      <div className="logo">
        {/* Logo/Título com link para a Home */}
        <Link to="/">
          <span className="logo-icon">💜</span> Mundinho Pessoal <span className="logo-icon">🎸</span>
        </Link>
      </div>
      
      <nav className="main-nav">
        {/* Links de navegação */}
        <Link to="/" className="nav-link">Início (Tesla)</Link>
        <Link to="/books" className="nav-link">Livros & Autoras</Link>
        <Link to="/music" className="nav-link">Rock & Queen</Link>
        <Link to="/reflections" className="nav-link nav-highlight">Diário Secreto</Link>
      </nav>
    </header>
  );
};

export default Header;