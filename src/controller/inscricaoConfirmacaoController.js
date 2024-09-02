import { Router } from 'express'
import { validarInscricaoConfirmacao } from '../repository/inscricaoConfirmacaoRepository.js'
import express from 'express'

const endpoints = Router()
endpoints.use(express.json())

endpoints.post('/validarConfirmacao', async (req, resp) => {
    const { idInscricao, chegada, qrcode } = req.body

    try {
        if (!idInscricao || !chegada || !qrcode) {
            return resp.status(400).send({ 
                error: 'Todos os parâmetros são obrigatórios' 
            })
        }

        let id = await validarInscricaoConfirmacao(idInscricao, chegada, qrcode)
        resp.status(201).send({ 
            id: id
        })

    } catch (error) {
        resp.status(500).send({ 
            error: error.message || 'Erro ao processar a visita.' 
        })
    }
})

export default endpoints
