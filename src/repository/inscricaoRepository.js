import con from './connection.js'

export async function validarInscricao(nome, telefone, cep, bairro, nascimento, cadastro, situacao) {
    const sql = `INSERT INTO tb_inscricao (nm_visitante, ds_telefone, ds_cep, ds_bairro, dt_nascimento, dt_cadastro, ds_situacao) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`

    try {
        const [result] = await con.query(sql, [nome, telefone, cep, bairro, nascimento, cadastro, situacao])
        return result.insertId


        
    } catch (err) {
        response.status(400).send({
            err: err
        })
    }
}
