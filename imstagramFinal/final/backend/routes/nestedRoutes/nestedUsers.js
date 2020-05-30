const usersPosts = require('express').Router({mergeParams:true})

const {getUsersPosts} = require("../../queries/users/users")
usersPosts.get('/:id/posts', getUsersPosts)

module.exports = usersPosts