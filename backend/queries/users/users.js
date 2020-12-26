const db = require("../../db/index");

const createUser = async (req, res, next) => {
  try {
    console.log(req.body);

    let newUser = await db.one(
      "INSERT INTO users (id, name, bio, email, user_pic) VALUES($1, $2, $2, $4, $5) RETURNING *",

      [req.body.id, req.body.name, req.body.bio, req.body.email, req.body.image]
    );
    res.json({
      status: "Success",
      message: "NEW USER CREATED",
      payload: newUser,
    });
  } catch (err) {
    next(err);
  }
};

const allUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM users");
    res.json({
      status: "Success",
      payload: { users },
      message: "All USERS",
    });
  } catch (err) {
    next(err);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await db.one("DELETE FROM users WHERE id = $1 RETURNING * ", [
      id,
    ]);
    res.status(200).json({
      status: "success",
      body: { user },
      message: "The user is deleted",
    });
  } catch (err) {
    next(err);
  }
};
const getUser = async (req, res, next) => {
  try {
    let user = await db.one("SELECT * FROM users WHERE id =$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      message: "User Retrieved",
      payload: user,
    });
  } catch (err) {
    next(err);
  }
};

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
module.exports = { createUser, allUsers, deleteUser, getUser, getUserPosts };
