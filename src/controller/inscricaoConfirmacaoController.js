import { Router } from 'express';
import { InscricaoConfirmacao } from '../repository/inscricaoConfirmacaoRepository.js';
import express from 'express';
import ValidarInscricaoConfirmacao from '../validation/inscricaoConfirmacaoValidacao.js';

const endpoints = Router();
endpoints.use(express.json());

endpoints.post('/validarConfirmacao', async (req, resp) => {
    const { idInscricao, chegada, qrcode } = req.body;

    try {
        ValidarInscricaoConfirmacao(req);

        let id = await InscricaoConfirmacao(idInscricao, chegada, qrcode);
        resp.status(201).send({ 
            id: id
        });

    } catch (error) {
        resp.status(500).send({ 
            error: error.message || 'Erro ao processar a visita.' 
        });
    }
})

export default endpoints
