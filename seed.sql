USE seed;

INSERT INTO roles (title, salary, department_id) VALUES("McMarketer", 89000.00, 1);
INSERT INTO roles (title, salary, department_id) VALUES("McGastronomist", 72000.00, 1);
INSERT INTO roles (title, salary, department_id) VALUES("McManager", 99000.00, 2);
INSERT INTO roles (title, salary, department_id) VALUES("McAdministrator", 55000.00, 2);
INSERT INTO roles (title, salary, department_id) VALUES("McFranchisee", 189000.00, 2);
INSERT INTO roles (title, salary, department_id) VALUES("McSales Rep", 39000.00, 3);
INSERT INTO roles (title, salary, department_id) VALUES("McShareholder", 1000000.99, 4);
INSERT INTO roles (title, salary, department_id) VALUES("McCrewman", 10162.23, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES("Mayor", "McCheese", 5, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES("Ronald", "McDonald", 7, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES("Lawrence", "Wallace", 8, 2);

INSERT INTO department(name) VALUES("McMarketing");
INSERT INTO department(name) VALUES("McManagement");
INSERT INTO department(name) VALUES("McSales");
INSERT INTO department(name) VALUES("McNepotism");




