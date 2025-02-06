export default function ValidarInscricaoConfirmacao(req) {
    if (!req.body.idInscricao) throw new Error("O Id da inscrição está inválido."); 
    if (req.body.chegada == null) throw new Error("A data da chegada está inválida."); 
    if (!req.body.qrcode) throw new Error("O qrCode está inválido."); 
}