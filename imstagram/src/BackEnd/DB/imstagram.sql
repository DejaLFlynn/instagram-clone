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
    hashtags VARCHAR,
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
    posts Int REFERENCES posts(id),
    hashtags_timestap TIMESTAMP
);

INSERT INTO users(fullname, username, email, profile_pic) VALUES
('Deja Flynn','dejaf', 'dejaflynn@pursuit.org', 'https://img.gadgethacks.com/img/68/44/63703994759508/0/change-your-profile-picture-display-name-for-imessage-ios-13.w1456.jpg'),  
   ('Nílber Remón', 'nilberr', 'nilberremon@pursuit.org', 'https://i1.sndcdn.com/artworks-000200690435-zz758s-t500x500.jpg'),
   ('Ashya Manning','ashyam', 'ashyamanning@pursuit.org', 'https://qph.fs.quoracdn.net/main-qimg-217015358349186e0e382cb15c5d7c63'),
   ('Shawn Quran','shawnq', 'shawnq@pursuit.org', 'https://s3.amazonaws.com/images.seroundtable.com/google-social-knowledge-1561549945.jpg');
