const user = require('express').Router();
const {createUser, allUsers, deleteUser, getUser} = require("../../QueriesAll/users")

user.post("/", createUser)
user.get("/", allUsers)
user.delete("/:id", deleteUser)
user.get("/:id", getUser)


module.exports = user;