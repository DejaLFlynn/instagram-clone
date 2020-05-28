const db = require("../../../db/index");

const createPost = async (req, res, next) => {
  
  req.body.id = req.user.id ;
    try {
        await db.one(
          "INSERT INTO posts (id, username_id, posts_image, posts_text, comments, hashtags, posts_at, likes) VALUES(${id}, ${user_id}, ${posts_image}, ${posts_text}, ${comments}, ${hashtags}, ${posts_at}, ${likes}) RETURNING *",
          req.body
          
        );
        res.json({
          message: "NEW Post CREATED",
          users,
        });
      } catch (err) {
        next(err);
      }
};
const allPosts = async (req, res, next) => {
    try {
        const posts = await db.any("SELECT * FROM posts");
        res.json({
            posts,
            message: "All Posts"
        })
    } catch (err) {
        next(err);
    }
}
const deletePost = async (req, res, next) => {
    try {
      await db.none("DELETE FROM posts WHERE id = $1", req.params.id);
      res.status(200).json({
        status: "success",
        message: "The post is deleted"
      });
    } catch (err) {
        next(err);
    }
  };
  const getPost = async (req, res, next) => {
    try {
      let post = await db.one(
        "SELECT * FROM posts WHERE username = $1",
        req.params.username
      );
      res.status(200).json({
        message: "retrieved single post",
        payload: post
      });
    } catch (err) {
        next(err);
    }
  };
module.exports = { createPost, allPosts, deletePost , getPost
};
