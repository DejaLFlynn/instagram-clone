DROP DATABASE IF EXISTS imstagram_db;
CREATE DATABASE imstagram_db;

\c imstagram_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS  posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS followers;
DROP TABLE IF EXISTS follows;
DROP TABLE IF EXISTS hashtags;

CREATE TABLE users (
    id serial PRIMARY KEY,
    fullname TEXT,
    username text NOT NULL unique,
    profile_pic VARCHAR,
    email VARCHAR UNIQUE
);


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id Int REFERENCES users(id),
    posts_image VARCHAR,
    posts_text VARCHAR,
    comments VARCHAR,
    posts_at TIMESTAMPTZ DEFAULT Now(), 
    posts_hashtag TEXT
    
   
);


CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    posts_id Int REFERENCES posts(id) ON DELETE CASCADE,
    likes_timestap TIMESTAMPTZ DEFAULT Now(), 
    followers_likes Int REFERENCES followers(id)
);


CREATE TABLE followers (
    id SERIAL PRIMARY KEY,
    users_id Int REFERENCES users(id) ON DELETE CASCADE,
    followers_timestap TIMESTAMPTZ DEFAULT Now() 

);


CREATE TABLE follows (
    id SERIAL PRIMARY KEY,
    users_id Int REFERENCES users(id) ON DELETE CASCADE,
    following_timestap TIMESTAMPTZ DEFAULT Now() 
);


CREATE TABLE hashtags (
    id SERIAL PRIMARY KEY,
    posts_id Int REFERENCES posts(id),
    hashtags_name TEXT
    
);

INSERT INTO users(fullname, username, email, profile_pic) VALUES
('Deja Flynn','dejaf', 'dejaflynn@pursuit.org', 'https://img.gadgethacks.com/img/68/44/63703994759508/0/change-your-profile-picture-display-name-for-imessage-ios-13.w1456.jpg'),  
   ('Nílber Remón', 'nilberr', 'nilberremon@pursuit.org', 'https://i1.sndcdn.com/artworks-000200690435-zz758s-t500x500.jpg'),
   ('Ashya Manning','ashyam', 'ashyamanning@pursuit.org', 'https://qph.fs.quoracdn.net/main-qimg-217015358349186e0e382cb15c5d7c63'),
   ('Shawn Quran','shawnq', 'shawnq@pursuit.org', 'https://s3.amazonaws.com/images.seroundtable.com/google-social-knowledge-1561549945.jpg');
INSERT INTO posts(user_id, posts_image, posts_text, comments) VALUES
(1, 'cat', 'https://static.boredpanda.com/blog/wp-content/uploads/2019/11/cat-fluffy-squirrel-tail-bell-fb.png', 'omg hes so fluffy'),
(2, 'fruit', 'https://cdn2.bigcommerce.com/n-dvzvde/ea1i3p/products/232/images/424/Pineapple_Google_Search__15964.1397342899.386.513.png?c=2', 'cant wait to devour'),
(3, 'burger', 'https://i.ytimg.com/vi/dKjtVqLLLR0/hqdefault.jpg', 'not sharing'),
(4, 'gremlins', 'https://news.toyark.com/wp-content/uploads/sites/4/2018/11/Ultimate-NECA-Gremlin-Figure-020.jpg', 'my favorites');

INSERT INTO hashtags (posts_id, hashtags_name)
   VALUES 
   (1, 'whatchaulooking@'),
   (1, 'possessdog'),
   (2, 'funny'),
   (3, 'catwins'),
   (3, 'twerking'),
   (3, 'OMG'),
   (4, 'funny'),
   (4, 'cute'),
   (1, 'wtf'),
   (1, 'mymomdeadlystare'),
   (2, 'asktodoovertime'),
   (3, 'wtf'),
   (3, 'whereshisneck'),
   (4, 'whenfridayishere'),
   (1, 'election'),
   (1, 'biden'),
   (1, 'fail'),
   (2, 'itshandled'),
   (3, 'whogotthebestshimmy?'),
   (4, 'meafterthesocialmediaproject?'),
   (1, 'itsmybirthday'),
   (1, 'vacayfromthekids'),
   (4, 'afterfixedabug'),
   (2, 'touchmymoneyagain'),
   (2, 'staywoke...dontplaywitmymoney'),
   (3, 'jumponit'),
   (3, 'tiktok'),
   (4, 'meeverymorningforwork'),
   (1, 'onlyglutenfree'),
   (1, 'NOCHOCOLATE!'),
   (2, 'crazydog'),
   (2, 'justleaveIT'),
   (3, 'twerking'),
   (3, 'ImSoHappy!'),
   (3, 'onpayday'),
   (4, 'so...naughty'),
   (4, 'lick....c..clickME'),
   (4, 'definitionoftheapp'),
   (1, 'soexcited'),
   (2, 'whoMe'),
   (3, 'notinthemood'),
   (3, 'angrybaby'),
   (4, 'FAB-U-LOUS'),
   (1, 'weLIT'),
   (1, 'groupcelebrationoncesocialmediaprojectisdone'),
   (2, 'whenacodebreaks'),
   (2, 'no..hellNO');
