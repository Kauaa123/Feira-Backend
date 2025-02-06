export default function ValidarInscricao(req) {
    if (!req.body.nome) throw new Error("O parâmetro Nome está inválido."); 
    if (!req.body.telefone) throw new Error("O parâmetro Telefone está inválido."); 
    if (!req.body.cep) throw new Error("O parâmetro CEP está inválido."); 
    if (!req.body.nascimento) throw new Error("O parâmetro Nascimento está inválido."); 
    if (!req.body.cadastro) throw new Error("O parâmetro Cadastro está inválido."); 
    if (!req.body.situacao) throw new Error("O parâmetro Situação está inválido."); 
}