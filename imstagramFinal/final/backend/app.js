const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

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
