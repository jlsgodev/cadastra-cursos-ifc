# Cadastro de Cursos - IFC

Este é um projeto full-stack para a disciplina de Programação Web do Instituto Federal Catarinense (IFC). A aplicação permite gerenciar um cadastro de cursos, utilizando um backend em Node.js com Express e um frontend em HTML, CSS e JavaScript puro.

## Principais Tecnologias

- **Backend:** Node.js, Express, PostgreSQL
- **Frontend:** HTML, CSS, JavaScript (com Fetch API)
- **Banco de Dados:** PostgreSQL

## Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## Como Executar o Projeto

### 1. Backend

**a. Clone o repositório:**

```bash
git clone https://github.com/jlsgodev/cadastra-cursos-ifc.git
cd curso-backend-frontend-web
```

**b. Navegue até a pasta do backend:**

```bash
cd curso-backend
```

**c. Crie o arquivo de ambiente:**
Crie um arquivo chamado `.env` na raiz da pasta `curso-backend` e preencha com suas credenciais do PostgreSQL. Use o `.env.example` como referência:

```env
# Exemplo de .env
DB_USER=seu_usuario
DB_HOST=localhost
DB_DATABASE=cursos
DB_PASSWORD=sua_senha
DB_PORT=5432
```

**d. Configure o Banco de Dados:**
Certifique-se de que seu servidor PostgreSQL esteja rodando. Crie um banco de dados chamado `cursos` e execute o script SQL abaixo para criar as tabelas necessárias:

```sql
-- Exemplo de Script SQL (adapte se necessário)
CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sigla VARCHAR(10) NOT NULL,
    descricao TEXT,
    coordenador VARCHAR(255)
);
```

**e. Instale as dependências e inicie o servidor:**

```bash
npm install
node index.js
```

O servidor estará rodando em `http://localhost:3001`. # se quiser pode mudar para 3000

### 2. Frontend

**a. Abra o arquivo `cursos.html`:**
Navegue até a pasta `curso-frontend` e abra o arquivo `cursos.html` em seu navegador de preferência.

A aplicação se comunicará automaticamente com a API do backend.

## Autor

**Jhon Gonçalves**

---

## Licença

Projeto desenvolvido para fins educacionais no **Instituto Federal Catarinense (IFC)**.
