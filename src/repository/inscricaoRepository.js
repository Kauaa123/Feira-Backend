import con from './connection.js'

export async function validarInscricao(nome, telefone, cep, nascimento, bairro, status, inscricao, visita, qrcode) {
    const sql = `INSERT INTO tb_inscricao (nm_usuario, nr_telefone, nr_cep, dt_nascimento, nm_bairro, ds_status, dt_inscricao, dt_visita, ds_qrcode) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`

    try {
        const [result] = await con.query(sql, [nome, telefone, cep, nascimento, bairro, status, inscricao, visita, qrcode])
        return result.insertId


        
    } catch (err) {
        console.error('Erro ao inserir inscrição:', err) 
        throw err 
    }
}
