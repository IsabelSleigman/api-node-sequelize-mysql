const database = require('../models')

class NivelController {

    static async ListarNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async BuscarNivelId(req, res) {
        const { id } = req.params

        try {
            const nivel = await database.Niveis.findOne({ where: { id: Number(id) } })
            return res.status(200).json(nivel)

        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async NovoNivel(req, res) {
        const novaNivel = req.body

        try {
            const nivelCriado = await database.Niveis.create(novaNivel)
            return res.status(200).json(nivelCriado)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async EditarNivel(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Niveis.update(novasInfos, { where: { id: Number(id) } })
            const nivelAtualizado = await database.Niveis.findOne({ where: { id: Number(id) } })
            return res.status(200).json(nivelAtualizado)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async DeletarNivel(req, res) {
        const { id } = req.params

        try {
            await database.Niveis.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ menssagem: `Id ${id} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController