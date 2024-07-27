import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Método Principal de entrada da aplicação Frontend (React) - Renderiza o App para o DOM na Página HTML

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

