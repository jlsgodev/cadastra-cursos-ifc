// Importa o Model Cursos
const Cursos = require('../models/Cursos');

// Função para obter todos os cursos
exports.getCursos = async (req, res) => {
  try {
    const cursos = await Cursos.getAll();
    res.status(200).json(cursos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar os cursos.' });
  }
};

// Função para obter um único curso pelo ID
exports.getCurso = async (req, res) => {
  try {
    const curso = await Cursos.getById(req.params.id);
    if (!curso) {
      return res.status(404).json({ message: 'Curso não encontrado.' });
    }
    res.status(200).json(curso);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar o curso.' });
  }
};

// Função para criar um novo curso
exports.createCurso = async (req, res) => {
  try {
    const novoCurso = await Cursos.create(req.body);
    res.status(201).json({ message: 'Curso criado com sucesso!', curso: novoCurso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o curso.' });
  }
};

// Função para atualizar um curso
exports.updateCurso = async (req, res) => {
  try {
    const cursoAtualizado = await Cursos.update(req.params.id, req.body);
    if (!cursoAtualizado) {
      return res.status(404).json({ message: 'Curso não encontrado para atualização.' });
    }
    res.status(200).json({ message: 'Curso atualizado com sucesso!', curso: cursoAtualizado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o curso.' });
  }
};

// Função para deletar um curso
exports.deleteCurso = async (req, res) => {
  try {
    const resultado = await Cursos.delete(req.params.id);
    if (resultado === 0) {
        return res.status(404).json({ message: 'Curso não encontrado para exclusão.' });
    }
    // Retorna status 204 (No Content), que é padrão para exclusões bem-sucedidas
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar o curso.' });
  }
};
