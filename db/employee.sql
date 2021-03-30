DROP DATABASE IF EXISTS work_DB;

CREATE DATABASE work_DB;

USE work_DB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(,) NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name DECIMAL(30),
  role_id INT,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("vanilla", 2.50, 100);

INSERT INTO role (flavor, price, quantity)
VALUES ("chocolate", 3.10, 120);

INSERT INTO employee (flavor, price, quantity)
VALUES ("strawberry", 3.25, 75);
