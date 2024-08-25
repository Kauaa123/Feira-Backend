import { Router } from 'express'
import { validarInscricao } from '../repository/inscricaoRepository.js'
import axios from 'axios'
import express from 'express'

const endpoints = Router()
endpoints.use(express.json())

endpoints.post('/validar', async (req, resp) => {
    const { nome, telefone, cep, nascimento, status, inscricao, visita, qrcode } = req.body

    try {
        if (!nome || !telefone || !cep || !nascimento || !status || !inscricao || !visita || !qrcode) {
            return resp.status(400).send({ 
                error: 'Todos os parâmetros são obrigatórios' 
            })
        }

        let a = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        let dados = a.data

        if (dados.erro) {
            return resp.status(400).send({ 
                error: 'CEP inválido' 
            })
        }

        let bairro = dados.bairro

        let id = await validarInscricao(nome, telefone, cep, nascimento, bairro, status, inscricao, visita, qrcode)
        resp.send({ id })

    } catch (error) {
        resp.status(500).send({ error:
            'Erro ao processar a inscrição' 
        })
    }
})

export default endpoints
