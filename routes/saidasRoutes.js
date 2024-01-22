const express = require('express');
const router = express.Router();
const SaidaController = require('../controllers/SaidasController');

// Rota para criar um novo Saida
router.post('/saidas/id:', SaidaController.createSaida);

// Rota para obter todos os Saidas
router.get('/saidas', SaidaController.getAllSaidas);

// Rota para obter um Saida pelo ID
router.get('/saidas/:id', SaidaController.getSaidaById);

// Rota para atualizar um Saida
router.put('/saidas/:id', SaidaController.updateSaida);

// Rota para deletar um Saida
router.delete('/saidas/:id', SaidaController.deleteSaida);

module.exports = router;