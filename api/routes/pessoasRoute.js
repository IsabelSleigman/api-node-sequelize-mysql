const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()
router
    .get('/pessoas', PessoaController.ListarPessoas)
    .get('/pessoas/:id', PessoaController.BuscarPessoaId)
    .post('/pessoas', PessoaController.NovaPessoa)
    .put('/pessoas/:id', PessoaController.EditarPessoa)
    .delete('/pessoas/:id', PessoaController.DeletarPessoa)
    .get('/pessoas/:estudanteId/matriculas', PessoaController.ListarMatriculasPessoa)
    .get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.BuscarMatriculaPessoa)
    .post('/pessoas/:estudanteId/matriculas', PessoaController.NovaMatricula)
    .put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.EditarMatricula)
    .delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.DeletarMatricula)

module.exports = router