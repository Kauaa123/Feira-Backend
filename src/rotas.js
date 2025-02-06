import inscricaoController from './controller/inscricaoController.js';
import inscricaoConfirmacaoController from './controller/inscricaoConfirmacaoController.js';

export default function Rotas(servidor) {
    servidor.use(inscricaoController);
    servidor.use(inscricaoConfirmacaoController);
}