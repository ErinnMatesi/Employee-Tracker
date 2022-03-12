USE company_db;

INSERT INTO departments (name)
VALUES ('IT'), ('Business Development'), ('Human Resources'), ('Legal'), ('Research and Development');

INSERT INTO roles (title, salary, department_id)
VALUES ('Software Engineer', 90000, 1), ('Lead Software Engineer', 140000, 1), ('Sales Representative', 80000, 2), ('Lead Marketer', 80000, 2), ('Recruiter', 60000, 3), ('Benefits Manager', 70000, 3), ('Paralegal', 50000, 4), ('Lawyer', 100000, 4), ('Clinical Researcher', 115000, 5), ('Lab Tech', 50000, 5);

-- TO DO update with manager ID
INSERT INTO employees (first_name, last_name, role_id,)
VALUES ('John', 'Doe', 1), ('Jane', 'Smith', 2), ('Paul', 'Jones', 3), ('Mary', 'Brown', 4), ('Jack', 'Green', 5), ('Anna', 'Miller', 6), ('Pedro', 'Vasquez', 7), ('Areli', 'Garcia', 8), ('Allen', 'Moore', 9), ('Sigrid', 'Karlsen', 10);