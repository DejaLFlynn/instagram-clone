DROP DATABASE IF EXISTS imstagram_db;
CREATE DATABASE imstagram_db;

\c imstagram_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    fullname TEXT,
    username text NOT NULL unique,
    profile_pic VARCHAR,
    email VARCHAR UNIQUE
);

DROP TABLE IF EXISTS  posts;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id Int REFERENCES users(id) ON DELETE CASCADE,
    posts_image VARCHAR,
    posts_text VARCHAR,
    comments VARCHAR,
    hashtags Int REFERENCES hashtags(id),
    posts_at TIMESTAMP,
    likes Int REFERENCES followers(id)
   
);

DROP TABLE IF EXISTS likes;

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    posts_id Int REFERENCES posts(id) ON DELETE CASCADE,
    likes_timestap TIMESTAMP,
    followers_likes Int REFERENCES followers(id)
);

DROP TABLE IF EXISTS followers;

CREATE TABLE followers (
    id SERIAL PRIMARY KEY,
    user_id Int REFERENCES users(id) ON DELETE CASCADE,
    followers_timestap TIMESTAMP
);

DROP TABLE IF EXISTS follows;

CREATE TABLE follows (
    id SERIAL PRIMARY KEY,
    user_id Int REFERENCES users(id) ON DELETE CASCADE,
    following_timestap TIMESTAMP
);

DROP TABLE IF EXISTS hashtags;

CREATE TABLE hashtags (
    id SERIAL PRIMARY KEY,
    post_hashtags Int REFERENCES posts(id)
    
);

INSERT INTO users(fullname, username, email, profile_pic) VALUES
('Deja Flynn','dejaf', 'dejaflynn@pursuit.org', 'https://img.gadgethacks.com/img/68/44/63703994759508/0/change-your-profile-picture-display-name-for-imessage-ios-13.w1456.jpg'),  
   ('Nílber Remón', 'nilberr', 'nilberremon@pursuit.org', 'https://i1.sndcdn.com/artworks-000200690435-zz758s-t500x500.jpg'),
   ('Ashya Manning','ashyam', 'ashyamanning@pursuit.org', 'https://qph.fs.quoracdn.net/main-qimg-217015358349186e0e382cb15c5d7c63'),
   ('Shawn Quran','shawnq', 'shawnq@pursuit.org', 'https://s3.amazonaws.com/images.seroundtable.com/google-social-knowledge-1561549945.jpg');

INSERT INTO hashtags (id, post_hashtags)
   VALUES 
   (1, 'whatchaulooking@'),
   (1, 'possessdog'),
   (2, 'funny'),
   (3, 'catwins'),
   (3, 'twerking'),
   (3, 'OMG'),
   (4, 'funny'),
   (4, 'cute'),
   (5, 'wtf'),
   (5, 'mymomdeadlystare'),
   (6, 'asktodoovertime'),
   (7, 'wtf'),
   (7, 'whereshisneck'),
   (8, 'whenfridayishere'),
   (9, 'election'),
   (9, 'biden'),
   (9, 'fail'),
   (10, 'itshandled'),
   (11, 'whogotthebestshimmy?'),
   (12, 'meafterthesocialmediaproject?'),
   (13, 'itsmybirthday'),
   (13, 'vacayfromthekids'),
   (12, 'afterfixedabug'),
   (14, 'touchmymoneyagain'),
   (14, 'staywoke...dontplaywitmymoney'),
   (15, 'jumponit'),
   (15, 'tiktok'),
   (16, 'meeverymorningforwork'),
   (17, 'onlyglutenfree'),
   (17, 'NOCHOCOLATE!'),
   (18, 'crazydog'),
   (18, 'justleaveIT'),
   (19, 'twerking'),
   (19, 'ImSoHappy!'),
   (19, 'onpayday'),
   (20, 'so...naughty'),
   (20, 'lick....c..clickME'),
   (20, 'definitionoftheapp'),
   (21, 'soexcited'),
   (22, 'whoMe'),
   (23, 'notinthemood'),
   (23, 'angrybaby'),
   (24, 'FAB-U-LOUS'),
   (25, 'weLIT'),
   (25, 'groupcelebrationoncesocialmediaprojectisdone'),
   (26, 'whenacodebreaks'),
   (26, 'no..hellNO'),
   (27, 'whiteboarding'),
   (27, 'reactHooks'),
   (28, 'why?'),
   (28, 'cloutchasingatitsbest'),
   (28, 'PSA...DONTDODRUGS'),
   (29, 'whosleepsthathard'),
   (30, 'nycrushhouratitsfinest'),
   (31, 'machineiscuter'),
   (31, 'nowletsgetmachinetocookandclean'),
   (31, 'notimpressed'),
   (32, 'planmynextmove'),
   (32, 'thisischessnotcheckers'),
   (33, 'freaky'),
   (34, 'OMG'),
   (34, 'whensomeonepassgas'),
   (35, 'noexcuses'),
   (36, 'girlbye'),
   (36, 'toallmyhaters'),
   (37, 'hewillalwaysgettheclick'),
   (38, 'clapyourhandsifyouhearmyvoice'),
   (39, 'nocomment'),
   (40, 'mewaitingfordinnertobeserve'),
   (40, 'starving'),
   (41, 'whenImhappyorsad');