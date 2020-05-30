const db = require("../../db/index");

const createHashtag = async (req, res, next) => {
req.body.id = req.hashtags.id;
  try {
    await db.one(
        "INSERT INTO hashtags(posts_id, hashtags_name)VALUES(${posts_id}, ${hashtags_name} RETURNING *",
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
  } catch (err) {
    next(err);
  }
};

module.exports = {createHashtag, searchHashtag};
