// Importa o framework Express
const express = require('express');
// Cria uma instância do Router do Express
const router = express.Router();

// Importa o controller de cursos
const cursosController = require('../controllers/cursosController');

// --- Mapeamento das Rotas para as Funções do Controller ---

// Rota para LER (GET) todos os cursos
// GET /cursos
router.get('/', cursosController.getCursos);

// Rota para LER (GET) um único curso pelo ID
// GET /cursos/1
router.get('/:id', cursosController.getCurso);

// Rota para CRIAR (POST) um novo curso
// POST /cursos
router.post('/', cursosController.createCurso);

// Rota para ATUALIZAR (PUT) um curso existente pelo ID
// PUT /cursos/1
router.put('/:id', cursosController.updateCurso);

// Rota para DELETAR (DELETE) um curso pelo ID
// DELETE /cursos/1
router.delete('/:id', cursosController.deleteCurso);

// Exporta o router para ser usado no arquivo principal do servidor (index.js)
module.exports = router;
