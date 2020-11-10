const db = require("../../db/index");

const createComment = async (req, res, next) => {
  try {
    console.log(req.body);
    let newComment = await db.one(
      "INSERT INTO comments(id, user_id, post_id, content) VALUES(${id}, ${user_id}, ${post_id}, ${content}) RETURNING * ",
      req.body
    );
    res.status(200).json({
      status: "success",
      message: "a new comment was created",
      body: newComment,
    });
  } catch (error) {
    next(error);
  }
};

const fetchCommentsForOne = async (req, res, next) => {
  try {
    let posts = await db.any(
      "SELECT * FROM comments WHERE users_id=$1",
      req.params.users_id
    );
    res.json({
      posts,
      message: "All comments for username",
    });
  } catch (error) {
    next(err);
  }
};
const deleteComment = async (req, res, next) => {
  try {
    await db.none(
      "DELETE FROM comments WHERE id = $1 RETURNING *",
      req.params.id
    );
    res.status(200).json({
      status: "success",
      message: "The comment is deleted",
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { createComment, fetchCommentsForOne, deleteComment };
