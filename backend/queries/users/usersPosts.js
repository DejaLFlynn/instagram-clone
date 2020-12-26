const db = require("../../db/index");

const getUserPosts = async (req, res) => {
  try {
    let posts = await db.any(
      "SELECT posts.id, posts.user_id, posts.posts_images, posts.content, users.name FROM posts LEFT JOIN users ON posts.user_id=users.id WHERE users.id =  $1"
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
module.exports = { getUserPosts };
