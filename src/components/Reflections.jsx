// src/components/Reflections.jsx
import React, { useState, useEffect } from 'react';
import PersonalDetails from './PersonalDetails'; 
import './Reflections.css'; 

const questions = [
  { id: 1, theme: 'Literatura', text: "Se a Alice Oseman escrevesse um spin-off de Crepúsculo, qual seria a dinâmica LGBTQIA+ que você mais gostaria de ver?" },
  { id: 2, theme: 'Identidade', text: "Como a sua demissexualidade se reflete na sua apreciação por romances slow burn (desenvolvimento lento) em livros?" },
  { id: 3, theme: 'Rock', text: "Qual música de rock te lembra mais a sensação de ser um vampiro solitário na floresta?" },
  { id: 4, theme: 'Identidade', text: "Se você pudesse dar um único conselho à sua versão mais jovem sobre ser lésbica e demissexual, qual seria?" },
  { id: 5, theme: 'Sentimentos', text: "Descreva seu 'final feliz' — ele é mais parecido com um romance de época ou com uma aventura na floresta?" },
  { id: 6, theme: 'Steven Universo', text: "Qual 'Fusão' (Fusion) de Steven Universo representa melhor sua personalidade ou sua relação com a pessoa que você mais ama, e por quê?" },
  { id: 7, theme: 'Steven Universo', text: "Se Forks fosse ameaçada, qual Gem (personagem) você traria para proteger a floresta e os lobisomens/vampiros?" },
];

const getInitialResponses = () => {
  const savedResponses = localStorage.getItem('reflectionResponses');
  return savedResponses ? JSON.parse(savedResponses) : {};
};

const Reflections = () => {
  const [responses, setResponses] = useState(getInitialResponses);

  useEffect(() => {
    localStorage.setItem('reflectionResponses', JSON.stringify(responses));
  }, [responses]);

  const handleResponseChange = (id, value) => {
    setResponses(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="reflections-container">
      <h2>O Diário da Estação Chuvosa 🌧️</h2>
      <p className="subtitle">Um espaço privado para pensamentos e o coração.</p>

      {/* Detalhes pessoais integrados aqui */}
      <PersonalDetails /> 
      
      {questions.map((q) => (
        <div key={q.id} className="reflection-card">
          <span className={`reflection-theme ${q.theme.includes('Steven Universo') ? 'steven-universe-theme' : ''}`}>{q.theme}</span>
          <h3>{q.text}</h3>
          <textarea
            value={responses[q.id] || ''}
            onChange={(e) => handleResponseChange(q.id, e.target.value)}
            placeholder="Escreva sua reflexão aqui..."
            rows="4"
          />
          <p className="save-note">*(Salvo automaticamente no seu navegador)*</p>
        </div>
      ))}
    </div>
  );
};

export default Reflections;