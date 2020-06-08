DROP DATABASE IF EXISTS imstagram_db;
CREATE DATABASE imstagram_db;

\c imstagram_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   users_name VARCHAR,
   email TEXT NOT NULL UNIQUE

);

DROP TABLE IF EXISTS  pictures;

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY ,
    posts_images VARCHAR DEFAULT NULL,
    content TEXT ,
    post_time TIMESTAMP NOT NULL DEFAULT  CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS likes;

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id),
    posts_id INT REFERENCES images(id), 
    like_amount INT,
    likes_timestap TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DROP TABLE IF EXISTS followers;
CREATE TABLE followers (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id) ON DELETE CASCADE,
    followers_timestap TIMESTAMPTZ DEFAULT Now() 

);


DROP TABLE IF EXISTS follows;
CREATE TABLE follows (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id) ON DELETE CASCADE,
    following_timestap TIMESTAMPTZ DEFAULT Now() 
);


DROP TABLE IF EXISTS hashtags;
CREATE TABLE hashtags (
    id SERIAL PRIMARY KEY,
    posts_id INT REFERENCES pictures(id),
    hashtags_name TEXT
    
);

INSERT INTO Users (users_name,  email )
   VALUES 
   ('dejaf', 'dejaflynn@pursuit.org'),  
   ('nilberr', 'nilberremon@pursuit.org'),
   ('ashyam', 'ashyamanning@pursuit.org'),
   ('Shawnc', 'Shawnc@pursuit.org' );



INSERT INTO posts (posts_images, content) VALUES
("ABC ","DEF ");

INSERT INTO likes (like_amount) VALUES
(1),
(2),
(3),
(4);

INSERT INTO hashtags (hashtags_name)
   VALUES 
   ( 'whatchaulooking@'),
   ( 'possessdog'),
   ( 'funny'),
   ( 'catwins'),
   ( 'twerking'),
   ( 'OMG'),
   ( 'funny'),
   ( 'cute'),
   ( 'wtf'),
   ( 'mymomdeadlystare'),
   ( 'asktodoovertime'),
   ( 'wtf'),
   ( 'whereshisneck'),
   ( 'whenfridayishere'),
   ( 'election'),
   ( 'biden'),
   ( 'fail'),
   ( 'itshandled'),
   ( 'whogotthebestshimmy?'),
   ( 'meafterthesocialmediaproject?'),
   ( 'itsmybirthday'),
   ( 'vacayfromthekids'),
   ( 'afterfixedabug'),
   ( 'touchmymoneyagain'),
   ( 'staywoke...dontplaywitmymoney'),
   ( 'jumponit'),
   ( 'tiktok'),
   ( 'meeverymorningforwork'),
   ( 'onlyglutenfree'),
   ( 'NOCHOCOLATE!'),
   ( 'crazydog'),
   ('weLIT'),
   ('groupcelebrationoncesocialmediaprojectisdone'),
   ( 'whenacodebreaks'),
   ( 'no..hellNO');
