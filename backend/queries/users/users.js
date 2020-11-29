const db = require("../../db/index");

const createUser = async (req, res, next) => {
  try {
    console.log(req.body);

    let newUser = await db.one(
      "INSERT INTO users (id, name, bio, email, user_pic) VALUES($1, $2, $2, $4, $5) RETURNING *",

      [
        req.body.id,
        req.body.name,
        req.body.bio,
        req.body.email,
        req.body.image,
      ]
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
module.exports = { createUser, allUsers, deleteUser, getUser };
