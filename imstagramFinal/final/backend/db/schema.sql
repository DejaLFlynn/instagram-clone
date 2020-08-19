-- DROP DATABASE IF EXISTS imstagram_db;
-- CREATE DATABASE imstagram_db;

-- \c imstagram_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS followers;

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR UNIQUE,
    name text NOT NULL,
    user_pic VARCHAR,
    bio VARCHAR
);


CREATE TABLE posts(
    id VARCHAR PRIMARY KEY ,
    user_id VARCHAR REFERENCES users(id),
    posts_images VARCHAR,
    content TEXT ,
    post_time TIMESTAMP NOT NULL DEFAULT NOW()

);

CREATE TABLE followers(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    post_id VARCHAR REFERENCES posts(id)

);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    -- follower_id VARCHAR REFERENCES followers(id),
    post_id VARCHAR REFERENCES posts(id),
    likes VARCHAR
);




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

INSERT INTO users
(id, name, user_pic, bio, email )
VALUES 
('zKmFaAX9i9QIEE5iV4aIyIeeEEC3', 'dejaf', 'https://i.pinimg.com/originals/22/ac/f8/22acf82cb30a3d26e813303509f79d3b.png', 'mommy pig', 'guest@gmail.com'),  
('2', 'sebastianfr', 'https://i.pinimg.com/originals/dc/df/b1/dcdfb182a25ad1617a47422024e16a64.jpg', 'uncle pig', 'sebastianfr@pursuit.org'),
('3', 'aliciaf', 'https://i.pinimg.com/236x/65/e6/26/65e626d11b9a4b1688ff73f7bf58f835.jpg', 'grandma pig', 'aliciaf@pursuit.org'),
('4', 'Shawnc', 'https://cdn.shopify.com/s/files/1/0899/1470/t/14/assets/george-pig-related.png?v=10021200618096522117', 'george pig', 'Shawnc@pursuit.org');



INSERT INTO posts(id, user_id, posts_images, content) 
VALUES
('1', 'zKmFaAX9i9QIEE5iV4aIyIeeEEC3', 'https://www.itl.cat/pngfile/big/43-430987_cute-profile-images-pic-for-whatsapp-for-boys.jpg','hi'),
('2', '2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPds087Sz0hw4O8vMDn7L5L-TWVoM3k0_EnQSlo3ACFmzUe4fe&usqp=CAU', 'me'),
('3', '3', 'https://i.pinimg.com/originals/e6/c1/4d/e6c14dd228b483f710ca30296bf3d71a.jpg', 'pan the man'),
('4', '4', 'https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70', 'DEF ');

INSERT INTO followers(user_id, post_id)
VALUES
('zKmFaAX9i9QIEE5iV4aIyIeeEEC3', '4'),
('2', '3'),
('3', '2'),
('4', '1');

INSERT INTO likes
(user_id, post_id, likes) 
VALUES
('zKmFaAX9i9QIEE5iV4aIyIeeEEC3', '2', '5'),
('2', '1', '2'),
('3', '4', '10'),
('4', '3', '6');

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
