const likes = require("express").Router();
const { checkFirebaseToken } = require("../../middleware/Auth")
const {


	addLike,
	explorerLikes,
	getById,
	removeLike

	
} = require("../../queries/users/likes");


likes.post("/",
checkFirebaseToken, 
addLike);

likes.get("/", explorerLikes)
likes.get("/:id", getById)
likes.delete("/:id", removeLike)


module.exports = likes;