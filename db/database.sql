create database companydb;

use companydb;

create table employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) DEFAULT  NULL,
    salary INT(5)  DEFAULT  NULL
)

INSERT INTO employees VALUES
    (1, 'Joey', 2000),
    (2, 'Tefa', 3000),
    (3, 'Angie', 4000),
    (4, 'Steven', 5000);