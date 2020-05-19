

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);

DROP TABLE IF EXISTS  posts;

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    user_id Int REFERENCES users(id),
    posts_image VARCHAR,
    posts_text VARCHAR,
    comments VARCHAR,
    hashtag VARCHAR,
    posts_timestamp TIMESTAMP,
    likes VARCHAR
   
);

DROP TABLE IF EXISTS likes;

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    posts_id Int REFERENCES posts(id),
    likes_timestap TIMESTAMP,
);

DROP TABLE IF EXISTS followers;

CREATE TABLE followers
(
    id SERIAL PRIMARY KEY,
    user_id Int REFERENCES users(id),
    followers_timestap TIMESTAMP,
);

DROP TABLE IF EXISTS follows;

CREATE TABLE follows
(
    id SERIAL PRIMARY KEY,
   user_id Int REFERENCES users(id),
    following_timestap TIMESTAMP,
);

DROP TABLE IF EXISTS hashtags;

CREATE TABLE hashtags
(
    id SERIAL PRIMARY KEY,
    posts_id Int REFERENCES posts(id),
    hashtags_timestap TIMESTAMP,
);