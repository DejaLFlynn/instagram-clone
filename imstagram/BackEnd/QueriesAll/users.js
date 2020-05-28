const db = require("../DB/index");

const createUser = async (req, res, next) => {
  
  req.body.id = req.user.id ;
    try {
        await db.one(
          "INSERT INTO users (id, fullname, username, profile_pic, email) VALUES(${id}, ${fullname}, ${username}, ${username}, ${profile_pic}, ${email}) RETURNING *",
          req.body
          
        );
        res.json({
          message: "NEW USER CREATED",
          users,
        });
      } catch (err) {
        next(err);
      }
};
const allUsers = async (req, res, next) => {
    // try {
    //     const users = await db.any("SELECT * FROM users");
    //     res.json({
    //         users,
    //         message: "All USERS"
    //     })
    // } catch (err) {
    //     next(err);
    // }
}
const deleteUser = async (req, res, next) => {
    // try {
    //   await db.none("DELETE FROM users WHERE id = $1", req.params.id);
    //   res.status(200).json({
    //     status: "success",
    //     message: "The user is deleted"
    //   });
    // } catch (err) {
    //     next(err);
    // }
  };
  const getUser = async (req, res, next) => {
    // try {
    //   let user = await db.one(
    //     "SELECT * FROM users WHERE username = $1",
    //     req.params.username
    //   );
    //   res.status(200).json({
    //     message: "retrieved single user",
    //     payload: user
    //   });
    // } catch (err) {
    //     next(err);
    // }
  };
module.exports = { createUser 
  // allUsers, deleteUser , getUser
};
