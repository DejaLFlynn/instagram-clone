const db = require("../../db/index");

const createComment = async (req, res, next) => {
  try {
    console.log(req.body);

  
    let newComment = await db.one(
      "INSERT INTO comments(user_id, post_id, content) VALUES($1, $2, $3) RETURNING *",
    [req.body.user_id, req.body.post_id, req.body.content]
    );
    res.status(200).json({
      status: "Success",
      message: "Comment Added",
      payload: newComment
    });
  } catch (error) {
    next(error);
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

const commentsForPost = async (req, res, next) => {
  try {
    const comments = await db.any(
      "SELECT * FROM comments WHERE id = $1",
      req.params.id
    );
    res.json({ comments });
  } catch (error) {}
};

const fetchCommentsForOne = async (req, res, next) => {
  try {
    const comments = await db.any("SELECT * FROM comments", req.params.id);
    res.json({ comments });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createComment,
  fetchCommentsForOne,
  deleteComment,
  commentsForPost,
};
