import con from './connection.js'

export async function validarInscricao(nome, telefone, cep, nascimento, bairro, status, inscricao, visita) {
    const sql = `INSERT INTO tb_inscricao (nm_usuario, nr_telefone, nr_cep, dt_nascimento, nm_bairro, ds_status, dt_inscricao, dt_visita) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

    try {
        const [result] = await con.query(sql, [nome, telefone, cep, nascimento, bairro, status, inscricao, visita])
        return result.insertId
        
    } catch (err) {
        resp.status(400).send({
            err: err
        })
    }
}
