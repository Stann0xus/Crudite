import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const PessoaForm = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            api.get(`/api/Pessoa/${id}`)
                .then(response => {
                    setNome(response.data.nome);
                    setCpf(response.data.cpf);
                    setDataNascimento(response.data.dataNascimento);
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const pessoa = { IdPessoa:id , nome, cpf, dataNascimento };
        const request = id ? api.put(`/api/Pessoa/${id}`, pessoa) : api.post('/api/Pessoa', pessoa);

        request
            .then(() => navigate('/'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <img src="../crudite_small.png" alt="Logo" style={{ float: 'left', marginRight: '16px', height: '7em' }} />
            <h1>{id ? 'Editar Pessoa' : 'Criar Pessoa'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div>
                    <label>CPF</label>
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </div>
                <div>
                    <label>Data de Nascimento</label>
                    <input type="date" value={dataNascimento.split('T')[0]} onChange={(e) => setDataNascimento(e.target.value)} required />
                </div>
                <button type="submit">Enviar!</button>
            </form>
        </div>
    );
};

export default PessoaForm;