const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./server/routes/api')

app.use('/', api)



const port = 3000
app.listen(port,function(){
    console.log(`app running on port ${port}`)
})
