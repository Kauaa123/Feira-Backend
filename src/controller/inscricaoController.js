import { Router } from 'express';
import { Inscricao } from '../repository/inscricaoRepository.js';
import axios from 'axios';
import express from 'express';
import validarInscricao from '../validation/inscricaoValidacao.js';

const endpoints = Router();
endpoints.use(express.json());

endpoints.post('/validar', async (req, resp) => {
    const { nome, telefone, cep, bairro, nascimento, cadastro, situacao } = req.body;

    try {
        validarInscricao(req);

        let response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = response.data;

        if (dados.erro) {
            return resp.status(400).send({ 
                error: 'CEP inválido' 
            })
        }

        let bairro = dados.bairro;

        let id = await Inscricao(nome, telefone, cep, bairro, nascimento, cadastro, situacao);
        resp.send({ id: id });

    } catch (error) {
        if (error.message) {
            return resp.status(400).send({ error: error.message });
        }
    
        resp.status(500).send({ error: 'Erro interno no servidor' });
    }
})

export default endpoints;
