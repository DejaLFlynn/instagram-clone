const db = require("../../db/index");



const addLike = async (req, res) => {
    try {
        let addedLike = await db.one("INSERT INTO likes (like_id, picture_id) VALUES (${voter_id}, ${picture_id}) RETURNING *", req.body);
        res.status(200).json({
            status: "Success",
            message: "New like created",
            payload: addedLike
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Could not add like",
            payload: null
        })
    }
}

const explorerLikes = async (req, res) => {
    try {
        let topPosts = await db.any("SELECT picture, COUNT(likes.picture_id) AS total_likes FROM pictures JOIN likes ON likes.picture_id = pictures.id GROUP BY picture ORDER BY total_likes DESC LIMIT 10");
        res.status(200).json({
            status: "Success",
            message: "Retrieved top 10 liked Posts",
            payload: topPosts
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Couldn't find top Posts",
            payload: null
        })
    }
}




module.exports = { addLike, explorerLikes };
