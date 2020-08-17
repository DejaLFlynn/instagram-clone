const likes = require("express").Router();
const { checkFirebaseToken } = require("../../middleware/Auth")
const {


	addLike,
	explorerLikes

	
} = require("../../queries/users/likes");


likes.post("/",
checkFirebaseToken, 
addLike);
likes.get("/:post_id", explorerLikes)


module.exports = likes;