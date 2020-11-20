const db = require("../../db/index");

// const createComment = async (req, res, next) => {
//   try {
//     console.log(req.body);
//     let newComment = await db.one(
//       "INSERT INTO comments (user_id, post_id, content) VALUES( ${user_id}, ${post_id}, ${content}) RETURNING * ",
//       req.body
//     );
//     res.status(200).json({
//       status: "success",
//       message: "a new comment was created",
//       body: newComment,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
const createComment = async (req, res, next) => {
    try {
      let user_id = req.user_id
      let { post_id } = req.params;
      let { content } = req.body;
      let comment = await db.one(
        "INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *",
        [post_id, user_id, content]
      );
      let username = await db.one(
        "SELECT username FROM users WHERE id = $1", [user_id]
      )
      res.status(200).json({
        status: "Success",
        message: "Comment Added",
        body: {
          comment,
          username
        },
      });
    } catch (error) {
      res.json({
        error: error,
      });
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

const commentsForPost = async (req, res, next)=>{
    try {
        const comments = await db.any("SELECT * FROM comments WHERE id = $1", req.params.id);
        res.json({comments})
    } catch (error) {
        
    }
    
}

const fetchCommentsForOne = async (req, res, next)=>{
    try {
        const comments = await db.any("SELECT * FROM comments", req.params.id);
        res.json({comments})
    } catch (error) {
        next(error)
    }
}

module.exports = { createComment, fetchCommentsForOne,
     deleteComment, commentsForPost };
