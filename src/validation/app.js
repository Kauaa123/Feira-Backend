import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import inscricaoController from '../controller/inscricaoController.js'
import inscricaoConfirmacaoController from '../controller/inscricaoConfirmacaoController.js'



const servidor = express()
servidor.use(cors())
servidor.use(express.json())
servidor.use(inscricaoController)
servidor.use(inscricaoConfirmacaoController)

servidor.listen(process.env.PORT, () => console.log(`A API subiu na porta ${process.env.PORT}`))