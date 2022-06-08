-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
CREATE DATABASE portifolio;

USE portifolio;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(50),
	user_email VARCHAR(50),
	user_password VARCHAR(50),
	user_year INT
);
CREATE TABLE postagem (
id_postagem INT PRIMARY KEY AUTO_INCREMENT,
titulo_postagem VARCHAR(50),
link_img_post VARCHAR(50),
categoria_postagem VARCHAR(10),CONSTRAINT chk_categoria CHECK 
(categoria_postagem = "jogos" OR categoria_postagem = "filmes" OR categoria_postagem = "animes" OR categoria_postagem = "séries"),
descricao_post VARCHAR(200),
fk_usuario INT, FOREIGN KEY (fk_usuario) REFERENCES usuario (id)
);



/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	user_name VARCHAR(50),
	user_email VARCHAR(50),
	user_password VARCHAR(50),
	user_year INT
);
