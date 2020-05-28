const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const usersRouter = require("./Routes/users/user");


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/user", usersRouter)
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
