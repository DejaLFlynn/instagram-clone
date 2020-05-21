const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log('listening to port', PORT)
})