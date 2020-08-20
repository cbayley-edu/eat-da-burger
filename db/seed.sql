USE burger_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("Hamburger", false);             -- id 1

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheeseburger Deluxe", false);   -- id 2

INSERT INTO burgers (burger_name, devoured)
VALUES ("Sliders", false);               -- id 3

SELECT * FROM burgers;