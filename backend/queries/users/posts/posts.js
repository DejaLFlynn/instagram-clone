const db = require("../../../db/index");

// const createPost = async (req, res, next) => {
//   try {
//     console.log(req.body);
//     let newPost = await db.one(
//       "INSERT INTO posts(user_id, posts_images, content) VALUES(${user_id}, ${posts_images}, ${content}) RETURNING *",
//       [req.body.user_id, req.body.posts_images, req.body.content]
//     );
//     res.status(200).json({
//       status: "success",
//       message: "a new post was created",
//       body: newPost,
//     });
//   } catch (err) {
//     next(err);
//   }
// };
const createPost = async (req, res) => {
  try {
    let newPost = await db.one(
      "INSERT INTO posts(user_id, posts_images, content) VALUES($1, $2, $3) RETURNING *",
    [req.body.user_id, req.body.posts_images, req.body.content]
    );
    res.status(200).json({
      status: "success",
      message: "a new post was created",
      payload: newPost
    });
  } catch (err) {
    console.log(err)
    res.status(404).json({
      status: err,
      message: "Post was not created",
      payload: null,
    });
  }
}
const allPosts = async (req, res, next) => {
  try {
    const posts = await db.any(
      "SELECT users.user_pic, users.email, users.name, users.bio, posts.user_id, posts.posts_images, posts.content FROM users JOIN posts ON users.id = posts.user_id"
    );

    res.json({
      posts,
      message: "All Posts",
    });
  } catch (err) {
    next(err);
  }
};
const deletePost = async (req, res, next) => {
  try {
    await db.none("DELETE FROM posts WHERE id = $1 RETURNING *", req.params.id);
    res.status(200).json({
      status: "success",
      message: "The post is deleted",
    });
  } catch (err) {
    next(err);
  }
};

const getPost = async (req, res, next) => {
  try {
    let posts = await db.any("SELECT * FROM posts");
    res.json({
      status: "Success",
      payload: { posts },
      message: "All POSTS",
    });
  } catch (err) {
    next(err);
  }
};
const fetchAllForOne = async (req, res, next) => {
  try {
    let usersPosts = await db.any(
      "SELECT posts.id, posts.user_id, posts.posts_images, posts.content, users.name FROM posts LEFT JOIN users ON posts.user_id=users.id WHERE users.id = $1",
      [req.params.user_id]
    );

    res.json({
      usersPosts,
      message: "All posts for username",
    });
  } catch (error) {
    next(err);
  }
};
const getUserPosts = async (req, res) => {
  try {
    let posts = await db.any(
      "SELECT posts.id, posts.user_id, posts.posts_images, posts.content, users.name FROM posts LEFT JOIN users ON posts.user_id=users.id WHERE users.id =  $1",
      [req.params.user_id]
    );
    res.status(200).json({
      status: 200,
      posts,
      message: "all posts retrieved",
    });
  } catch (error) {
    res.status(404).json({ status: 404, message: "no posts found" });
  }
};

module.exports = { createPost, allPosts, deletePost, getPost, fetchAllForOne };
