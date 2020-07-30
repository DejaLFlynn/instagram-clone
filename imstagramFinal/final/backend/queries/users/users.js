const db = require("../../db/index");

const createUser = async (req, res, next) => {
  

    try {
       console.log(req.body)
        let newUser = await db.one(
          "INSERT INTO users (id, name, user_pic, bio, email) VALUES(${id}, ${name}, ${user_pic}, ${bio}, ${email}) RETURNING *", req.body
        );
        res.json({
          status: "Success",
          message: "NEW USER CREATED",
          body: newUser
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
            body: {users},
            message: "All USERS"
        })
    } catch (err) {
        next(err);
    }
}
const deleteUser = async (req, res, next) => {
    try {
      let {id} = req.params
      let user = await db.one("DELETE FROM users WHERE id = $1 RETURNING * ",
      [id] );
      res.status(200).json({
        status: "success",
        body: {user},
        message: "The user is deleted"
      });
    } catch (err) {
        next(err);
    }
  };
  const getUser = async (req, res, next) => {
    try {
      let user = await db.one(
        "SELECT * FROM users WHERE users_name = $1",
        req.params.users_name
      );
      res.status(200).json({
        message: "retrieved single user",
        body: user
      });
    } catch (err) {
        next(err);
    }
  };
module.exports = { createUser, allUsers, deleteUser , getUser
};
