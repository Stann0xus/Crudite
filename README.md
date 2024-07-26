
### README.md
<img src="./crudite.png" alt="Crudite Logo" width="64" height="89" align="left" />
# Crudite
é uma API RESTful do tipo CRUD para o cadastro de pessoas, utilizando C# no backend com ASP.NET Core 8.0 e Entity Framework, e um banco de dados MySQL. O frontend é desenvolvido em React.

## Funcionalidades

- **Listar Pessoas**: Recupera uma lista de todas as pessoas cadastradas.
- **Obter Pessoa por ID**: Recupera os detalhes de uma pessoa específica pelo seu ID.
- **Criar Pessoa**: Adiciona uma nova pessoa ao cadastro.
- **Atualizar Pessoa**: Atualiza os dados de uma pessoa existente.
- **Excluir Pessoa**: Remove uma pessoa do cadastro.
- **Filtrar Pessoas por Nome**: Permite filtrar as pessoas pelo nome.
- **Emitir Relatório de Pessoas**: Gera um relatório em formato CSV de todas as pessoas cadastradas ou filtradas.

## Estrutura do Projeto

- **Controllers**: Contém os controladores `PessoaController` para gerenciar as operações CRUD e `StatusController` para verificar o status do backend e do banco de dados.
- **Data**: Contém o contexto de banco de dados `DataContext`.
- **Models**: Contém a classe `Pessoa` que define a estrutura da entidade.
- **Properties**: Configurações do projeto.
- **appsettings.json**: Arquivo de configuração do aplicativo.
- **Program.cs**: Arquivo principal para configurar e iniciar o aplicativo.

## Configuração do Banco de Dados

Certifique-se de que você tenha um servidor MySQL em execução e atualize a string de conexão no arquivo `appsettings.json`:

```json
{
    "ConnectionStrings": {
        "DefaultConnection": "Server=localhost;Database=Crudite_DB;User=Crudite_User;Password=Crudite_Senha;"
    }
}
```

### Configuração do Script SQL

Edite o arquivo `CruditeDB.sql` com as informações correspondentes à configuração do banco de dados no projeto e execute-o no MySQL para criar o usuário, a senha e o banco de dados adequados.

## Executando o Projeto

### Pré-requisitos

- .NET 8 SDK ou superior
- MySQL Server
- Node.js (para o frontend)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/Crudite.git
cd Crudite
```

IMPORTANTE!
1.1. Edite os arquivos CruditeDB.sql e `appsettings.json` com Usuários/Senhas correspondentes

2. Execute o script SQL:

```bash
mysql -u Seu_Usuário -p Seu_Banco_de_Dados < ./CruditeDB.sql
```

**Usando MySQL Workbench:**

- Abra o MySQL Workbench e conecte-se ao seu servidor MySQL.
- Importe o arquivo `CruditeDB.sql` e execute-o.

3. Execute o projeto backend:

```bash
dotnet run
```

4. Acesse a documentação da API no navegador:

```
https://localhost:7059/swagger
```

5. Inicie o frontend:

```bash
cd crudit
npm start
```

## Endpoints da API

### Pessoa

- **Criar uma nova pessoa**

```
POST /api/Pessoa
Content-Type: application/json

{
  "nome": "João Silva",
  "cpf": "123.456.789-00",
  "dataNascimento": "1990-01-01T00:00:00"
}
```

- **Listar todas as pessoas**

```
GET /api/Pessoa
```

- **Obter uma pessoa pelo ID**

```
GET /api/Pessoa/{id}
```

- **Atualizar uma pessoa existente**

```
PUT /api/Pessoa/{id}
Content-Type: application/json

{
  "idPessoa": 1,
  "nome": "João Silva",
  "cpf": "123.456.789-00",
  "dataNascimento": "1990-01-01T00:00:00"
}
```

- **Remover uma pessoa pelo ID**

```
DELETE /api/Pessoa/{id}
```

- **Filtrar pessoas por nome**

```
GET /api/Pessoa/filter?nome=João
```

- **Emitir relatório de pessoas**

```
GET /api/Pessoa/report
```

### Status

- **Verificar o status do backend**

```
GET /api/Status/status
```

- **Verificar o status do banco de dados**

```
GET /api/Status/dbstatus
```

## Contribuição

Sinta-se à vontade para fazer um fork do projeto e enviar pull requests. Qualquer contribuição é bem-vinda!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

### Adicional: Arquivo .gitignore

Para garantir que você não envie arquivos desnecessários para o GitHub, adicione um arquivo `.gitignore` no seu projeto com o seguinte conteúdo:

```gitignore
# Compiled files
bin/
obj/

# User-specific files
.vscode/
*.user
*.rsuser

# ASP.NET
appsettings.Development.json

# Entity Framework
Migrations/

# Rider
.idea/

# Visual Studio
.vs/

# Node.js
node_modules/
```
