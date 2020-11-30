const likes = require("express").Router();
const { checkFirebaseToken } = require("../../middleware/Auth")
const {


	addLike,
	explorerLikes,
	getById,
	removeDislike

	
} = require("../../queries/users/likes");


likes.post("/",
checkFirebaseToken, 
addLike);

likes.get("/", explorerLikes)
likes.get("/:id", getById)
likes.delete("/:id", removeDislike)


module.exports = likes;