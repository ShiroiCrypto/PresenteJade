// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando todos os componentes criados em src/components
import Header from './components/Header'; 
import Home from './components/Home';
import Books from './components/Books';
import Music from './components/Music';
import Reflections from './components/Reflections';

// Importe seu CSS global, se houver (Ex: para definir a fonte ou cor de fundo do body)
import './App.css'; 

function App() {
  return (
    // 1. O Router encapsula toda a navegação
    <Router>
      
      {/* 2. O Header (barra de navegação) aparece em todas as páginas */}
      <Header /> 
      
      {/* 3. A tag <main> pode ser usada para estilizar o conteúdo principal */}
      <main>
        
        {/* 4. As Rotas definem qual componente renderizar em cada URL */}
        <Routes>
          
          {/* Rota Raiz: A Home com a Bobina de Tesla */}
          <Route path="/" element={<Home />} />
          
          {/* Rota para a seção de Livros (Alice Oseman) */}
          <Route path="/books" element={<Books />} />
          
          {/* Rota para a seção de Música (Queen/Rock) */}
          <Route path="/music" element={<Music />} />
          
          {/* Rota para o Diário de Reflexões */}
          <Route path="/reflections" element={<Reflections />} />
          
          {/* Rota 404 para qualquer URL que não corresponda às anteriores */}
          <Route path="*" element={
            <div style={{ color: 'white', textAlign: 'center', marginTop: '100px', backgroundColor: '#121212', minHeight: '100vh', paddingTop: '50px' }}>
              <h2>404 | Você se perdeu na névoa de Forks...</h2>
              <p>Volte para o caminho seguro.</p>
              {/* Você pode adicionar um link para <Link to="/">Home</Link> aqui, se quiser */}
            </div>
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;