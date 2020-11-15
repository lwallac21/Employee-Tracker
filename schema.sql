drop database if exists seed
create database seed;
use seed;
create table department (
    id int auto_increment not null,
    name varchar(30) not null,
    primary key (id)
);
create table roles (
    id int auto_increment not null,
    title varchar(30) not null,
    salary decimal(10,2) not null,
    department_id int not null,
    primary key (id)
);
create table employee (
    id int auto_increment not null,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int,
    primary key (id)
);