const db = require("../../db/index");

const createUser = async (req, res, next) => {
  
  req.body.id = req.user.id ;
    try {
        await db.one(
          "INSERT INTO Users (id, full_name, username, profile_pic, email) VALUES(${id}, ${full_name}, ${username}, ${profile_pic}, ${email}) RETURNING *",
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
    try {
        const users = await db.any("SELECT * FROM Users");
        res.json({
            users,
            message: "All USERS"
        })
    } catch (err) {
        next(err);
    }
}
const deleteUser = async (req, res, next) => {
    try {
      await db.none("DELETE FROM Users WHERE id = $1", req.params.id);
      res.status(200).json({
        status: "success",
        message: "The user is deleted"
      });
    } catch (err) {
        next(err);
    }
  };
  const getUser = async (req, res, next) => {
    try {
      let user = await db.one(
        "SELECT * FROM Users WHERE username = $1",
        req.params.username
      );
      res.status(200).json({
        message: "retrieved single user",
        payload: user
      });
    } catch (err) {
        next(err);
    }
  };
module.exports = { createUser, allUsers, deleteUser , getUser
};
