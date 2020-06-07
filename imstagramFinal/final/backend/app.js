const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const usersRouter = require("./routes/users/users");
const postsRouter = require('./routes/posts/posts')
const multer = require("multer")
const path = require("path")
// const hashtagRouter = require("./routes/hashtags/hashtags")
app.use(cors());
app.use(bodyParser.urlencoded({extended: true,
                                limit: "50mb",
                                parameterLimit: 50000}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "Public")));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./Backend/Public/Uploads");
    },
    filename: function(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });

  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      filetype.mimetype === "image/png" ||
      filetype.mimetype === "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5 
    }
  });

  app.post("/upload", upload.single("image"), (req, res, next) => {
    try {
      console.log(req.file);
      let url = "http://localhost:3001/Uploads/" + req.file.filename;
      res.json({
        imageUrl: url,
        message: "File Uploaded"
      });
    } catch (error) {
      res.status(400).json({
        status: error,
        message: "Upload Failed"
      });
    }
  });
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
