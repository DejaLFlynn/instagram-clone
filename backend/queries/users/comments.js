const db = require("../../db/index");

const createComment = async (req, res, next) => {
  try {
    console.log(req.body);
    let newComment = await db.one(
      "INSERT INTO comments (id, user_id, post_id, content) VALUES(${id}, ${user_id}, ${post_id}, ${content}) RETURNING * ",
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

// const fetchCommentsForOne = async (req, res, next) => {
//   try {
//     let {user_id} = req.params.user_id;
//     let {post_id} = req.params.post_id;
//     let {content} = req.body;
//     let comment = await db.one(
//         "INSERT INTO comments(user_id, post_id, content) VALUES ($1, $2, $3) RETURN *",
//         [post_id, user_id, content]
//     )

//     let user = await db.one("SELECT username FROM users WHERE id=$1", [user_id])
  
    
//     res.json({
//       posts,
//       message: "All comments for user",
//       body: {
//           comment,
//           user
//       }
//     });
//   } catch (error) {
//     next(err);
//   }
// };
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
module.exports = { createComment, 
    // fetchCommentsForOne,
     deleteComment, commentsForPost };
