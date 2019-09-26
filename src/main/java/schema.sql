CREATE DATABASE IF NOT EXISTS scraperdb;

CREATE TABLE IF NOT EXISTS company (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    profile_url VARCHAR(40),
    picture_url VARCHAR(80),
    rate NUMERIC(2, 1),
    total_review INT
);

# Example dummy insert
INSERT INTO company(
    name, 
    profile_url, 
    picture_url, 
    rate, 
    total_review
) 
VALUES  (
    'companyName',
    'companyProfileURL',
    'companyPictureURL',
    4.5,
    20
);