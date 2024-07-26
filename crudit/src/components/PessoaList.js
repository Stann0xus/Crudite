import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const PessoaList = () => {
    const [pessoas, setPessoas] = useState([]);
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchPessoas();
    }, []);

    const fetchPessoas = () => {
        api.get('/api/Pessoa')
            .then(response => setPessoas(response.data))
            .catch(error => console.error(error));
    };

    const handleDelete = (id) => {
        api.delete(`/api/Pessoa/${id}`)
            .then(() => setPessoas(pessoas.filter(pessoa => pessoa.idPessoa !== id)))
            .catch(error => console.error(error));
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleFilter = () => {
        api.get(`/api/Pessoa/filter?nome=${nome}`)
            .then(response => setPessoas(response.data))
            .catch(error => console.error(error));
    };

    const handleDownload = () => {
        api.get('/api/Pessoa/report', {
            responseType: 'blob', // importante para trabalhar com dados binários
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'pessoas.csv'); // nome do arquivo
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        }).catch(error => console.error(error));
    };

    return (
        <div>
            <img src="./crudite.png" alt="Logo" style={{ float: 'left', marginRight: '16px', height: '7em' }} />
            <h1>Crud-it!</h1>
            <button onClick={() => navigate('/add')}>Adicionar Pessoa</button>
            <div>
                <input
                    type="text"
                    placeholder="Filtrar por nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <button onClick={handleFilter}>Filtrar</button>
                <button onClick={fetchPessoas}>Limpar Filtro</button>
                <button onClick={handleDownload}>Download CSV</button>
            </div>
            <ul>
                {pessoas.map(pessoa => (
                    <li key={pessoa.idPessoa}>
                        {pessoa.nome} - {pessoa.cpf} - {pessoa.dataNascimento}
                        <button onClick={() => handleEdit(pessoa.idPessoa)}>Editar</button>
                        <button onClick={() => handleDelete(pessoa.idPessoa)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PessoaList;
