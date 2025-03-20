DROP TABLE IF EXISTS country;
CREATE TABLE country (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    population INT,
    capital VARCHAR(50),
    flag VARCHAR(255)
);
