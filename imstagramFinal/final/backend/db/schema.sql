-- DROP DATABASE IF EXISTS imstagram_db;
-- CREATE DATABASE imstagram_db;

-- \c imstagram_db;

DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS  posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS followers;

CREATE TABLE Users
(
    id VARCHAR PRIMARY KEY,
    email VARCHAR,
    users_name VARCHAR
);


CREATE TABLE posts (
    id SERIAL PRIMARY KEY ,
    posts_images VARCHAR DEFAULT NULL,
    content TEXT ,
    post_time TIMESTAMP NOT NULL DEFAULT  CURRENT_TIMESTAMP
);


-- CREATE TABLE likes (
--     id SERIAL PRIMARY KEY,
--     users_id INT REFERENCES users(id),
--     posts_id INT REFERENCES images(id), 
--     like_amount INT,
--     likes_timestap TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );


-- CREATE TABLE followers (
--     id SERIAL PRIMARY KEY,
--     users_id INT REFERENCES users(id) ON DELETE CASCADE,
--     followers_timestap TIMESTAMPTZ DEFAULT Now() 

-- );


-- DROP TABLE IF EXISTS follows;
-- CREATE TABLE follows (
--     id SERIAL PRIMARY KEY,
--     users_id INT REFERENCES users(id) ON DELETE CASCADE,
--     following_timestap TIMESTAMPTZ DEFAULT Now() 
-- );


-- DROP TABLE IF EXISTS hashtags;
-- CREATE TABLE hashtags (
--     id SERIAL PRIMARY KEY,
--     posts_id INT REFERENCES pictures(id),
--     hashtags_name TEXT
    
-- );

-- INSERT INTO Users (id, users_name,  email )
--    VALUES 
--    ('1', 'dejaf', 'dejaflynn@pursuit.org'),  
--    ('2', 'nilberr', 'nilberremon@pursuit.org'),
--    ('3', 'ashyam', 'ashyamanning@pursuit.org'),
--    ('4', 'Shawnc', 'Shawnc@pursuit.org' );



INSERT INTO posts (posts_images, content) 
VALUES
('https://www.itl.cat/pngfile/big/43-430987_cute-profile-images-pic-for-whatsapp-for-boys.jpg','hi'),
('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPds087Sz0hw4O8vMDn7L5L-TWVoM3k0_EnQSlo3ACFmzUe4fe&usqp=CAU', 'me'),
('https://i.pinimg.com/originals/e6/c1/4d/e6c14dd228b483f710ca30296bf3d71a.jpg', 'pan the man'),
('https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70 ','DEF ');

-- INSERT INTO likes (like_amount) VALUES
-- (1),
-- (2),
-- (3),
-- (4);

-- INSERT INTO hashtags (hashtags_name)
--    VALUES 
--    ( 'whatchaulooking@'),
--    ( 'possessdog'),
--    ( 'funny'),
--    ( 'catwins'),
--    ( 'twerking'),
--    ( 'OMG'),
--    ( 'funny'),
--    ( 'cute'),
--    ( 'wtf'),
--    ( 'mymomdeadlystare'),
--    ( 'asktodoovertime'),
--    ( 'wtf'),
--    ( 'whereshisneck'),
--    ( 'whenfridayishere'),
--    ( 'election'),
--    ( 'biden'),
--    ( 'fail'),
--    ( 'itshandled'),
--    ( 'whogotthebestshimmy?'),
--    ( 'meafterthesocialmediaproject?'),
--    ( 'itsmybirthday'),
--    ( 'vacayfromthekids'),
--    ( 'afterfixedabug'),
--    ( 'touchmymoneyagain'),
--    ( 'staywoke...dontplaywitmymoney'),
--    ( 'jumponit'),
--    ( 'tiktok'),
--    ( 'meeverymorningforwork'),
--    ( 'onlyglutenfree'),
--    ( 'NOCHOCOLATE!'),
--    ( 'crazydog'),
--    ('weLIT'),
--    ('groupcelebrationoncesocialmediaprojectisdone'),
--    ( 'whenacodebreaks'),
--    ( 'no..hellNO');
