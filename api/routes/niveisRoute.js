const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()
router
    .get('/niveis', NivelController.ListarNiveis)
    .get('/niveis/:id', NivelController.BuscarNivelId)
    .post('/niveis', NivelController.NovoNivel)
    .put('/niveis/:id', NivelController.EditarNivel)
    .delete('/niveis/:id', NivelController.DeletarNivel)
module.exports = router