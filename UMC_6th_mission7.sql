USE jaenjaen;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, name, email, created_at)
VALUES (20210901, '옥재은', 'dhrwodms@duksung.ac.kr', CURRENT_TIMESTAMP);

SELECT * FROM users WHERE id = 20210901;