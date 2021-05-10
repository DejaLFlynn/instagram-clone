const express = require('express');

const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(fileUpload())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
const users = require("./routes/users/users");
const posts = require('./routes/posts/posts');
const followers = require('./routes/followers/followers')
const likes = require('./routes/likes/likes')
const comments = require('./routes/comments')
const hashtags = require('./routes/hashtags/hashtags')

app.use('/users', users);
app.use('/posts', posts);
app.use('/likes', likes);
app.use('/comments', comments);
app.use('/comments', hashtags);

app.get('/posts', (req, res) => {
    request(
      { url: 'https://cta-imstagram.netlify.app/posts' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });
// app.use('/followers', followers);

// app.use((err, req, res, next)=>{
//     console.log("backend error", err)
//     if(err.status){
//         res.status(err.status).json(err)
//     }else{
//         // next(err)
//         res.status(500).json(err)
//     }
// })
// app.post('/upload/:id', (req, res)=>{
//     if(req.files === null){
//        return res.status(400).json({msg:'no file uploaded'})
//     }
//     const file = req.files.file
//     file.mv(`${__dirname}/client/public/uploads/${file.name}`,err=>{
//         if(err){
//             console.log(err);
//             return res.status(500).send(err)
//         }
//         res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
//     })
// })
app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
})
