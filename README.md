# CineFilm
Projeto da disciplina Programação com Frameworks para Web
# CineFilm - Aplicação Web para Gerenciamento de Filmes

**CineFilm** é uma aplicação web desenvolvida para gerenciar o cadastro de filmes, permitindo criar, listar, atualizar e deletar filmes do banco de dados. A aplicação possui um sistema de validação de formulários e armazena os filmes em um banco de dados MongoDB.

## Funcionalidades

- **Cadastrar Filme**: Permite adicionar um novo filme ao banco de dados.
- **Listar Filmes**: Exibe uma lista de todos os filmes cadastrados.
- **Atualizar Filme**: Permite editar as informações de um filme existente.
- **Deletar Filme**: Permite excluir um filme do banco de dados.

### Campos de um Filme

Cada filme possui as seguintes informações:
- **Título**: Nome do filme.
- **Autor**: Nome do ator ou diretor.
- **Faixa Etária**: A faixa etária do filme (por exemplo: Livre, 10, 12, 14, 16, 18).
- **Gênero**: O gênero do filme (por exemplo: Ação, Comédia, Aventura, Drama, etc.).

### Validações

Antes de cadastrar ou atualizar um filme, os seguintes campos são validados:
- O **Título** e o **Autor** são obrigatórios e não podem ser vazios.
- A **Faixa Etária** deve ser uma das opções válidas: "Livre", "10", "12", "14", "16", "18".
- O **Gênero** deve ser uma opção válida de uma lista pré-definida, incluindo: "Ação", "Comédia", "Aventura", "Drama", "Ficção Científica", "Animação", "Suspense", "Terror".

Se qualquer um desses critérios não for atendido, a operação será rejeitada, e o usuário receberá uma mensagem de erro com a razão.

## Tecnologias Utilizadas

- **Node.js**: Para o servidor backend.
- **Express**: Framework web para construir a API RESTful.
- **TypeScript**: Para garantir um código mais robusto e seguro.
- **MongoDB**: Banco de dados NoSQL para armazenar as informações dos filmes.
- **Mongoose**: Biblioteca para modelar dados MongoDB e interagir com o banco de dados.
  
## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) - versão 14.x ou superior.
- [MongoDB](https://www.mongodb.com/) - Para o banco de dados (pode ser rodado localmente ou usando um serviço na nuvem como o MongoDB Atlas).

### Passos para Rodar a Aplicação:

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/Scalu-Neo/CineFilm.git


2. **Instalar dependências**:

   Navegue até o diretório do projeto e instale as dependências:

   ```bash
   cd CineFilm
   npm install

3. **Configurar conexão com o MongoDb**:

   No arquivo src/config/db.ts, altere a URL de conexão para apontar para o seu banco de dados MongoDB.

   ```bash
    const mongoURI = 'mongodb://localhost:27017/...';

4. **Rodar a aplicação**:

   ```bash
    npm run dev
5. **Acessando a API**:

- **Cadastrar Filme**: Post /api/films
- **Listar Filmes**: Get api/films || Get api/films/id
- **Atualizar Filme**: Put api/films/id
- **Deletar Filme**: Delete api/films/id
