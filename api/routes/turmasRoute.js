const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()
router
    .get('/turmas', TurmaController.ListarTurmas)
    .get('/turmas/:id', TurmaController.BuscarTurmaId)
    .post('/turmas', TurmaController.NovaTurma)
    .put('/turmas/:id', TurmaController.EditarTurma)
    .delete('/turmas/:id', TurmaController.DeletarTurma)
module.exports = router