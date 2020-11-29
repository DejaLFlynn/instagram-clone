const db = require("../../db/index");

const createHashtag = async (req, res, next) => {
req.body.id = req.hashtags.id;
  try {
    await db.any("INSERT INTO hashtags (posts_id, hashtags_name) VALUES (${posts_id}, ${hashtags_name})", 
        req.body
    );
    res.json({
        message: "New hashtag Created",
        hashtags,
    })

  } catch (err) {
    next(err);
  }
};

const searchHashtag = async (req, res, next) => {
  try {
    let search = await db.any("SELECT hashtags_name FROM hashtags LIKE '#%'" )
    res.json({
      message: 'images found by hashtag',
      search
    })
  } catch (err) {
    next(err);
  }
};
const postsByHashtag = async (req, res, next) => {
  try {
      let images = await db.any("SELECT posts.posts_image, ARRAY_AGG (hashtags.hashtags_name) post_id FROM hashtags JOIN posts_id ON posts.id = hashtags.posts_id GROUP BY posts.id, posts.posts HAVING posts.id = $1", req.params.id);
      res.status(200).json({
          status: "Success",
          message: "Retrieved images by hashtag",
          payload: images
      })
  } catch (err) {
      next(err)
  }
}

module.exports = {createHashtag, searchHashtag, postsByHashtag};
