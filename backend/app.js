const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const users = require("./routes/users/users");
const posts = require('./routes/posts/posts');
const followers = require('./routes/followers/followers')
const likes = require('./routes/likes/likes')

app.use('/users', users);
app.use('/posts', posts);
app.use('/likes', likes);
// app.use('/followers', followers);

app.use((err, req, res, next)=>{
    console.log("backend error", err)
    if(err.status){
        res.status(err.status).json(err)
    }else{
        // next(err)
        res.status(500).json(err)
    }
})

app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
})
