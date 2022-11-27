CREATE DATABASE projetoIndividual;
USE projetoIndividual;

CREATE TABLE IF NOT EXISTS cor (
  idCor INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  PRIMARY KEY (idCor)
  );

CREATE TABLE IF NOT EXISTS usuario (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  fkCor INT,
  PRIMARY KEY (idUsuario),
  FOREIGN KEY (fkCor) REFERENCES cor (idCor)
);
CREATE TABLE IF NOT EXISTS cartaFavorita (
  idCartaFavorita INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45)  NOT NULL,
  fkUsuario INT,
  PRIMARY KEY (idCartaFavorita),
  FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
  );
INSERT INTO cor (nome) VALUES
  ("Vermelho"),
  ("Verde"),
  ("Branco"),
  ("Azul"),
  ("Preto");