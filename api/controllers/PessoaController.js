const database = require('../models')

class PessoaController {

    static async ListarPessoas(req, res) {
        try {
            const pessoasLista = await database.Pessoas.findAll()
            return res.status(200).json(pessoasLista)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async BuscarPessoaId(req, res) {
        const { id } = req.params

        try {
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoa)

        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async NovaPessoa(req, res) {
        const novaPessoa = req.body

        try {
            const pessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(pessoaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async EditarPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async DeletarPessoa(req, res) {
        const { id } = req.params

        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ menssagem: `Id ${id} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async BuscarMatriculaPessoa(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            const matricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            return res.status(200).json(matricula)

        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async ListarMatriculasPessoa(req, res) {
        const { estudanteId } = req.params

        try {
            const matriculas = await database.Matriculas.findAll({ where: { estudante_id: Number(estudanteId) } })
            return res.status(200).json(matriculas)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async NovaMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }

        try {
            const matriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(matriculaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async EditarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body

        try {
            await database.Matriculas.update(novasInfos, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            const matricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            return res.status(200).json(matricula)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async DeletarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            return res.status(200).json({ menssagem: `Id ${matriculaId} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController