const users = require('express').Router();
const {createUser} = require('../../QueriesAll/users')

users.post('/', createUser)

module.exports = users;