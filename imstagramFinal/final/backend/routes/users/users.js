const users = require("express").Router();
const {
  createUser,
  allUsers,
  deleteUser,
  getUser,
} = require("../../queries/users/users");
 const {checkFirebaseToken} = require('../../middleware/Auth')
users.post("/", 
checkFirebaseToken, 
createUser);
users.get("/", allUsers);
users.get("/:id", checkFirebaseToken, getUser);
users.delete("/:id", deleteUser);

module.exports = users;