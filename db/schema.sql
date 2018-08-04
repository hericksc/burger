DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NULL,
  devoured boolean NOT NULL Default 0,
  
  PRIMARY KEY (id)
);