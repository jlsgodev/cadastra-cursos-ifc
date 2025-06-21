// Importa a função de query do arquivo de configuração do banco de dados
const db = require('../config/db');

// Classe Cursos para interagir com a tabela 'cursos' no banco de dados
class Cursos {
  // Método estático para buscar todos os cursos
  static async getAll() {
    const { rows } = await db.query('SELECT * FROM cursos ORDER BY id ASC');
    return rows;
  }

  // Método estático para buscar um curso pelo seu ID
  static async getById(id) {
    const { rows } = await db.query('SELECT * FROM cursos WHERE id = $1', [id]);
    // Retorna o primeiro resultado, pois o ID é único
    return rows[0];
  }

  // Método estático para criar um novo curso
  static async create(dadosCurso) {
    const { nome, sigla, descricao, coordenador } = dadosCurso;
    const { rows } = await db.query(
      'INSERT INTO cursos (nome, sigla, descricao, coordenador) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, sigla, descricao, coordenador]
    );
    return rows[0];
  }

  // Método estático para atualizar um curso existente
  static async update(id, dadosCurso) {
    const { nome, sigla, descricao, coordenador } = dadosCurso;
    const { rows } = await db.query(
      'UPDATE cursos SET nome = $1, sigla = $2, descricao = $3, coordenador = $4 WHERE id = $5 RETURNING *',
      [nome, sigla, descricao, coordenador, id]
    );
    return rows[0];
  }

  // Método estático para deletar um curso pelo seu ID
  static async delete(id) {
    const { rowCount } = await db.query('DELETE FROM cursos WHERE id = $1', [
      id,
    ]);
    // rowCount será 1 se a exclusão for bem-sucedida, ou 0 se não encontrar o ID
    return rowCount;
  }
}

// Exporta a classe para ser utilizada em outras partes da aplicação
module.exports = Cursos;
