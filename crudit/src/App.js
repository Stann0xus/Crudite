// Define as Rotas para o App React - no caso, a página raiz & inicial (/) com PessoasList (listagem/filtro) e a página de formulário com PessoasForm (adição/edição) (/add & /edit).

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PessoaList from './components/PessoaList';
import PessoaForm from './components/PessoaForm';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<PessoaList />} /> 
                    <Route path="/add" element={<PessoaForm />} />
                    <Route path="/edit/:id" element={<PessoaForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;