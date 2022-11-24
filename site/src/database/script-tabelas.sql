CREATE DATABASE projetoIndividual;
USE projetoIndividual;


CREATE TABLE IF NOT EXISTS cor (
  idCor INT NOT NULL,
  nome VARCHAR(45) NOT NULL,
  PRIMARY KEY (idCor)
  );

CREATE TABLE IF NOT EXISTS cartaFavorita (
  idCartaFavorita INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45)  NOT NULL,
  PRIMARY KEY (idCartaFavorita)
  );



CREATE TABLE IF NOT EXISTS usuario (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  fkCor INT,
  fkCartaFavorita INT,
  PRIMARY KEY (idUsuario),
  FOREIGN KEY (fkCor) REFERENCES cor (idCor),
  FOREIGN KEY (fkCartaFavorita) REFERENCES cartaFavorita (idcartaFavorita)
);