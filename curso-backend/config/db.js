// Importa o pacote 'dotenv' para carregar as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importa a classe Pool do pacote 'pg'
const { Pool } = require('pg');

// Cria uma nova instância do Pool com as configurações do banco de dados
// As configurações são lidas a partir das variáveis de ambiente (process.env)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Exporta um objeto que contém um método 'query'
// Este método encapsula a execução de consultas no banco de dados,
// tornando mais fácil de usar em outras partes da aplicação.
module.exports = {
  query: (text, params) => pool.query(text, params),
};
