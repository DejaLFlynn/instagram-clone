const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const PORT = process.env.PORT
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.listen(PORT, ()=>{
    console.log('listening to port', PORT)
})