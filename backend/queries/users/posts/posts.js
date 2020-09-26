const db = require("../../../db/index");

const createPost = async (req, res, next) => {
  try {
      console.log(req.body)
       let newPost =  await db.one('INSERT INTO posts(id, user_id, posts_images, content) VALUES(${id}, ${user_id}, ${posts_images}, ${content}) RETURNING *', req.body);
        res.status(200).json({
          status: 'success',
          message: 'a new post was created',
          body: newPost
          
        });
      } catch (err) {
        next(err);
      }
};
const allPosts = async (req, res, next) => {
    try {
        const posts = await db.any('SELECT * FROM posts');
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
      await db.none('DELETE FROM posts WHERE id = $1 RETURNING *', req.params.id);
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
      let post = await db.any(
        'SELECT * FROM posts WHERE id = $1',
        req.params.id
        
      );
      res.status(200).json({
        message: "retrieved single post",
        payload: post
      });
    } catch (err) {
        next(err);
    }
  };
  const fetchAllForOne = async(req, res, next)=>{
    try {
      let posts = await db.any(
        "SELECT * FROM posts WHERE users_id=$1", req.params.users_id
      )
      res.json({
        posts,
        message: "All posts for username"
      })
    } catch (error) {
      next(err)
    }
  }
module.exports = { createPost, allPosts, deletePost , getPost, fetchAllForOne
};
