import con from './connection.js'

export async function validarInscricaoConfirmacao(idInscricao, chegada, qrcode) {
    const sql = `INSERT INTO tb_inscricao_confirmacao (id_inscricao, dt_chegada, ds_qrcode) 
                 VALUES (?, ?, ?)`

    try {
        const [result] = await con.query(sql, [idInscricao, chegada, qrcode])
        return result.insertId


        
    } catch (err) {
        response.status(400).send({
            err: err
        })
    }
}

