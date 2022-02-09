var express = require('express');
var router = express.Router();
var Controller = require('../Controllers/RegistroController');

router.get('/registros', Controller.buscarTudo);
router.post('/registros', Controller.salvar);
router.put('/registros/:id', Controller.alterar);
router.delete('/registros/:id', Controller.deletar);

module.exports = router;