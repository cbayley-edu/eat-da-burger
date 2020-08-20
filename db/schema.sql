CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false
);

SELECT * FROM burgers;
