CREATE DATABASE projetoIndividual;
USE projetoIndividual;


CREATE TABLE IF NOT EXISTS cor (
  idCor INT NOT NULL,
  nome VARCHAR(45) NULL,
  PRIMARY KEY (idCor)
  );

CREATE TABLE IF NOT EXISTS cartaFavorita (
  idCartaFavorita INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NULL,
  PRIMARY KEY (idCartaFavorita)
  );



CREATE TABLE IF NOT EXISTS usuario (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  senha VARCHAR(45) NULL,
  fkCor INT NOT NULL,
  fkCartaFavorita INT NOT NULL,
  PRIMARY KEY (idUsuario),
  FOREIGN KEY (fkCor) REFERENCES cor (idCor),
  FOREIGN KEY (fkCartaFavorita) REFERENCES cartaFavorita (idcartaFavorita)
);