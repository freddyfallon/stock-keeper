CREATE TABLE stock (id SERIAL PRIMARY KEY, item VARCHAR(40) not null, quantity INTEGER);
INSERT INTO stock (item, quantity) VALUES ('ham', 3);