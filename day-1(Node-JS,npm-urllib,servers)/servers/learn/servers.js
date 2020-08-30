const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname,"node_modules")))


app.get('/', function(req,res){
    console.log("Someone came to the server! hurray!")
    res.send("thank you for coming here :) ")
})



app.listen(port, function () {
    console.log(`running server on port ${port}`)
})



// // spot check 1

// app.get('/life', function(req,res){
//     res.send("42")
// })



// //spot check 2
// const users = {
//     tilda: "You've done a wonderful job",
//     riva: "You need to improve your form, but good perseverance",
//     jeremy: "You're incredible"
// }

// app.get('/user/:user',function(req,res){
//     res.send(`${req.params.user}, ${users[req.params.user]}`)
// })

// app.get('/routeWithOptionalParameters', (request, response) => {
//     let params = request.query
//     response.send(params)
// })



// //spot check 3
// app.get('/details',function(req,res){
//     let query = req.query
//     console.log(query.city)
//     res.send({zipcode:query.zipcode,city:query.city,middleName:query.middleName})//params
// })



//spot check 4
const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.get('/books/:booksID',function(req,res){
    let query = req.params.booksID
    console.log(query)
    res.send(data[query])
})





