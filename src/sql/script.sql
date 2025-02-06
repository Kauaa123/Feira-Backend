CREATE DATABASE IF NOT EXISTS db_inscricao;
USE db_inscricao;

CREATE TABLE IF NOT EXISTS tb_inscricao (
    id_inscricao INT PRIMARY KEY AUTO_INCREMENT,
    nm_visitante VARCHAR(50) NOT NULL,
    ds_telefone VARCHAR(15) NOT NULL,
    ds_cep VARCHAR(10) NOT NULL,
    ds_bairro VARCHAR(60) NOT NULL,
    dt_nascimento DATE NOT NULL, 
    dt_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP, 
    ds_situacao VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_inscricao_confirmacao (
    id_inscricao_confirmacao INT PRIMARY KEY AUTO_INCREMENT,
    id_inscricao INT NOT NULL,
    dt_chegada DATETIME NOT NULL,
    ds_qrcode VARCHAR(100) NOT NULL UNIQUE, 
    FOREIGN KEY (id_inscricao) REFERENCES tb_inscricao(id_inscricao) 
);


select * from tb_inscricao;
select * from tb_inscricao_confirmacao;