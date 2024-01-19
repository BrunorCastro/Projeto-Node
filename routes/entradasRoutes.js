const express = require('express');
const router = express.Router();
const EntradaController = require('../controllers/EntradasController');

// Rota para criar um novo Entrada
router.post('/entradas', EntradaController.createEntrada);

// Rota para obter todos os Entradas
router.get('/entradas', EntradaController.getAllEntradas);

// Rota para obter um Entrada pelo ID
router.get('/entradas/:id', EntradaController.getEntradaById);

// Rota para atualizar um Entrada
router.put('/entradas/:id', EntradaController.updateEntrada);

// Rota para deletar um Entrada
router.delete('/entradas/:id', EntradaController.deleteEntrada);

module.exports = router;