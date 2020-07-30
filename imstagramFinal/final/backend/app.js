const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
const users = require("./routes/users/users");
const posts = require('./routes/posts/posts');
const followers = require('./routes/followers/followers')
const likes = require('./routes/likes/likes')

app.use('/users', users);
app.use('/posts', posts);
// app.use('/likes', likes);
// app.use('/followers', followers);



app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
})
