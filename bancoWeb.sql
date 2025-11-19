CREATE SCHEMA trabalhoweb;

USE trabalhoweb;

CREATE TABLE filmes (
	idFilme INT AUTO_INCREMENT,
	titulo VARCHAR(50),
    PRIMARY KEY (idFilme)
);

CREATE TABLE usuarios (
	idUsuario INT AUTO_INCREMENT,
    email VARCHAR (100) NOT NULL,
    senha VARCHAR (50) NOT NULL,
    PRIMARY KEY (idUsuario)
);

SELECT * FROM usuarios;