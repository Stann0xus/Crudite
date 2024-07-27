import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// M�todo Principal de entrada da aplica��o Frontend (React) - Renderiza o App para o DOM na P�gina HTML

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

