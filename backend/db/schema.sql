-- DROP DATABASE IF EXISTS imstagram_db;
-- CREATE DATABASE imstagram_db;

-- \c imstagram_db;

DROP TABLE IF EXISTS followers;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS follows;
DROP TABLE IF EXISTS hashtags;

CREATE TABLE users
(
    id VARCHAR PRIMARY KEY,
    email VARCHAR UNIQUE,
    name text NOT NULL,
    user_pic VARCHAR,
    bio VARCHAR
);


CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    posts_images VARCHAR,
    content VARCHAR,
    post_time TIMESTAMP NOT NULL DEFAULT NOW()

);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    -- poster_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    content VARCHAR,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE followers
(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id)
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    -- follower_id VARCHAR REFERENCES followers(id),
    post_id INTEGER REFERENCES posts(id),
    likes INTEGER
);

CREATE TABLE follows
(
    id SERIAL PRIMARY KEY,
    users_id VARCHAR REFERENCES users(id) ON DELETE CASCADE
    -- following_timestap TIMESTAMPTZ DEFAULT Now() 
);


-- CREATE TABLE hashtags (
--     id SERIAL PRIMARY KEY,
--     posts_id INT REFERENCES pictures(id),
--     hashtags_name TEXT,
-- );

INSERT INTO users
    (id, name, user_pic, bio, email)
VALUES
    ('Lhl39hmBAvalJZPAQyTfnSs02Vr1', 'dejaf', 'https://i.pinimg.com/originals/22/ac/f8/22acf82cb30a3d26e813303509f79d3b.png', 'mommy pig', 'guest@gmail.com'),
    ('2', 'sebastianfr', 'https://i.pinimg.com/originals/dc/df/b1/dcdfb182a25ad1617a47422024e16a64.jpg', 'uncle pig', 'sebastianfr@pursuit.org'),
    ('3', 'aliciaf', 'https://i.pinimg.com/236x/65/e6/26/65e626d11b9a4b1688ff73f7bf58f835.jpg', 'grandma pig', 'aliciaf@pursuit.org'),
    ('7TmHqX88TbhL6CQ1XtgRyks50Xl2', 'user', 'https://i.pinimg.com/originals/04/7d/fc/047dfc2552d91ae45f5c5362e71f4e43.gif', 'user account', 'guest2@gmail.com'),
    ('4', 'dejal', 'https://i.pinimg.com/originals/22/ac/f8/22acf82cb30a3d26e813303509f79d3b.png', 'mommy pig', 'guest4@gmail.com'),
    ('0MiN674Er2ajv7czWwudVK2BmH83', 'lyndonSeb', 'https://i.pinimg.com/originals/dc/df/b1/dcdfb182a25ad1617a47422024e16a64.jpg', 'uncle pig', 'sebastianf@pursuit.org'),
    ('8Z8jBn31fIfHveQYVUb8BziZ9iE2', 'alicial', 'https://i.pinimg.com/236x/65/e6/26/65e626d11b9a4b1688ff73f7bf58f835.jpg', 'grandma pig', 'aliciafr@pursuit.org'),
    ('IEFspTPeWoM03IxTTgAn6OLrhO92', 'user2', 'https://i.pinimg.com/originals/04/7d/fc/047dfc2552d91ae45f5c5362e71f4e43.gif', 'user account', 'guest3@gmail.com'),
    ('ogP2B8DhiCgsBsTvlBVwGm5Mm6p2', 'Shawnq', 'https://cdn.shopify.com/s/files/1/0899/1470/t/14/assets/george-pig-related.png?v=10021200618096522117', 'george pig', 'Shawnc@pursuit.org');



INSERT INTO posts
    (user_id, posts_images, content)
VALUES
    ( 'Lhl39hmBAvalJZPAQyTfnSs02Vr1', 'https://www.itl.cat/pngfile/big/43-430987_cute-profile-images-pic-for-whatsapp-for-boys.jpg', 'To my amazing sister...I want to wish you a VERY Happy Birthday! I am so proud of all that you have accomplished'),
    ( '0MiN674Er2ajv7czWwudVK2BmH83', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPds087Sz0hw4O8vMDn7L5L-TWVoM3k0_EnQSlo3ACFmzUe4fe&usqp=CAU', ' Let us discuss! Let’s share the healing and put the proper energy out into the universe so we are all in a better space!'),
    ( '8Z8jBn31fIfHveQYVUb8BziZ9iE2', 'https://i.pinimg.com/originals/e6/c1/4d/e6c14dd228b483f710ca30296bf3d71a.jpg', 'pan the man'),
    ( 'Lhl39hmBAvalJZPAQyTfnSs02Vr1', 'https://image.shutterstock.com/image-photo/tranquil-beach-scene-exotic-tropical-260nw-644740495.jpg', 'Love the neighbor right. This is exactly how you welcome the new kid to block 😉'),
    ( '7TmHqX88TbhL6CQ1XtgRyks50Xl2', 'https://www.moneysense.ca/wp-content/uploads/2017/01/vacation.jpg', 'me'),
    ( '0MiN674Er2ajv7czWwudVK2BmH83', 'https://content.delta.com/content/www/en_US/shop/delta-vacations/destinations.damAsset.html/content/dam/delta-www/dlv/images/destination-landing-pages/overview.jpg', 'Just love to have fun great times ❤️❤️'),
    ( '8Z8jBn31fIfHveQYVUb8BziZ9iE2', 'https://travel.usnews.com/images/vacation_landing_hero.jpg', '🚨 Sunday ThrowBack 🚨'),
    ( 'IEFspTPeWoM03IxTTgAn6OLrhO92', 'https://hbr.org/resources/images/article_assets/2017/08/aug17-04-vicko-mozara-324955.jpg', 'There isn’t a large body of research on prickly pear oil yet.'),
    ( 'Lhl39hmBAvalJZPAQyTfnSs02Vr1', 'https://cdn.sandals.com/sandals/v12/images/home/top-slides/overwater-collection-mobile.jpg', 'What a great night thanks again ladies ❤️❤️'),
    ( 'Lhl39hmBAvalJZPAQyTfnSs02Vr1', 'https://www.dunes.com/sites/default/files/styles/450x350/public/snippets/piggy_bank_thumbail_copy2.jpg', 'Sometimes you gotta get in your element! You have to understand who you are to understand where you plan on going'),
    ( '7TmHqX88TbhL6CQ1XtgRyks50Xl2', 'https://luxuryescapes.com/magazine/wp-content/uploads/2018/12/five-luxurious-resorts-malaysia-820x394.jpg', 'me'),
    ( 'IEFspTPeWoM03IxTTgAn6OLrhO92', 'https://images.says.com/uploads/story_source/source_image/493729/2152.jpg', 'Finding My Peace, While Trusting In God ❤️'),
    ( 'Lhl39hmBAvalJZPAQyTfnSs02Vr1', 'https://thesmartlocal.com/wp-content/uploads/images/easyblog_articles/4582/Luxury-resorts-Malaysia-thesmartlocal-20-1200x675.jpg', 'Stepping Out For a DRANK!!!');

INSERT INTO followers
    (user_id, post_id)
VALUES
    ('Lhl39hmBAvalJZPAQyTfnSs02Vr1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('7TmHqX88TbhL6CQ1XtgRyks50Xl2', '4'),
    ('0MiN674Er2ajv7czWwudVK2BmH83', '5'),
    ('8Z8jBn31fIfHveQYVUb8BziZ9iE2', '6'),
    ('IEFspTPeWoM03IxTTgAn6OLrhO92', '7'),
    ('ogP2B8DhiCgsBsTvlBVwGm5Mm6p2', '8'),
    ('Lhl39hmBAvalJZPAQyTfnSs02Vr1', '9'),
    ('Lhl39hmBAvalJZPAQyTfnSs02Vr1', '10'),
    ('2', '11'),
    ('3', '12'),
    ('8Z8jBn31fIfHveQYVUb8BziZ9iE2', '13');

INSERT INTO likes
    ( user_id, post_id, likes)
VALUES
    ('Lhl39hmBAvalJZPAQyTfnSs02Vr1', '2', '5'),
    ('Lhl39hmBAvalJZPAQyTfnSs02Vr1', '1', '2'),
    ('Lhl39hmBAvalJZPAQyTfnSs02Vr1', '4', '10'),
    ('Lhl39hmBAvalJZPAQyTfnSs02Vr1', '3', '6');

INSERT INTO comments
    ( user_id,  post_id, content)
VALUES
    ( 'Lhl39hmBAvalJZPAQyTfnSs02Vr1', '2', 'This is the coolest thing since slice bread'),
    ( '7TmHqX88TbhL6CQ1XtgRyks50Xl2', '1', 'Over the rainbow is the best place on earth'),
    ( 'IEFspTPeWoM03IxTTgAn6OLrhO92', '3', 'More cowbell please!');



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
