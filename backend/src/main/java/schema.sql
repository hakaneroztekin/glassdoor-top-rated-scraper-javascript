CREATE DATABASE scraperdb;

CREATE TABLE company (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    profile_url VARCHAR(120),
    picture_url VARCHAR(120),
    rate NUMERIC(2, 1),
    total_review INT
);

-- Example insert
INSERT INTO company (
    name, 
    profile_url, 
    picture_url, 
    rate, 
    total_review
) 
VALUES  (
    'Google',
    'https://www.glassdoor.com/Overview/Working-at-Google-EI_IE9079.11,17.htm',
    'https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png',
    4.4,
    12000
);