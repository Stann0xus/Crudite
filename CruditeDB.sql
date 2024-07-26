/* Script de Criação da Tabela/Usuário e Privilégios para Crudite API */

CREATE DATABASE Crudite_DB; 

USE Crudite_DB;

CREATE TABLE Pessoas(
	idPessoa INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    dataNascimento DATE NOT NULL
);

CREATE USER 'Crudite_User'@'localhost' IDENTIFIED BY 'Crudite_Senha';
GRANT ALL PRIVILEGES ON Crudite_DB.* TO 'Crudite_User'@'localhost';