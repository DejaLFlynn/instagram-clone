const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const usersRouter = require("./routes/users/users");
const postsRouter = require('./routes/posts/posts')
// const hashtagRouter = require("./routes/hashtags/hashtags")
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/users", usersRouter)
app.use('/posts', postsRouter)
// app.use('/hashtags', hashtagRouter)
app.use((err, req, res, next) => {
    console.log(err);
    if(err.status) {
        res.status(err.status).json(err);
    } else {
        res.status(500).json(err);
    }
})


app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
})
