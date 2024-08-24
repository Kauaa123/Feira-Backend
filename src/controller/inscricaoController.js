import { Router } from 'express'
import { validarInscricao } from '../repository/inscricaoRepository.js'
import axios from 'axios'

const endpoints = Router()

endpoints.post('/validar', async (req, resp) => {
    const { nome, telefone, cep, nascimento, status, inscricao, visita } = req.query

    try {
        const a = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const dados = a.data

        if (dados.erro) {
            return resp.status(400).send({ error: 'CEP inválido' })
        }

        const bairro = dados.bairro
        const id = await validarInscricao(nome, telefone, cep, nascimento, bairro, status, inscricao, visita)
        resp.send({ id })
    } catch (error) {
        console.error('Erro ao processar a inscrição:', error)
        resp.status(500).send({ error: 'Erro ao processar a inscrição' })
    }
})

export default endpoints
