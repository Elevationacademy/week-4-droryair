// EXERCISES 1-5  (MUST)
//link: https://kernel.elevation.ac/cohorts/53/lessons/285/apply/activity/19

//EXERCISE 1
const express = require('express')
const app = express()
const port = 3000


// EXERCISE 3

const path = require('path')
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))


//BACK TO EXERCISE 1
app.listen(port, function(){
    console.log(`server running on port ${port}`)
})

app.get('/',function(req,res){
    res.send(" Server's up and running smoothly")
})

// EXERSICE 2  
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function (req, res) {
    const name = req.params.name
    const exists = store.some(i => i.name === name)
    if (!exists) {
        res.send({price:null})
    } else {
        let price
        for (i in store) {
            if (store[i].name === name) {
                price = store[i].price
            }
        }
        res.send({price})
    }
})

// EXERCISE 4
app.get('/buy/:name', function (req, res) {
    const name = req.params.name
    for (i in store) {
        if (store[i].name === name) {
            store[i].inventory--
            res.send(`Congrats! You just baught a ${store[i].name}`)
        }
    }
    res.send(`Item ${name} not found`)
})





// EXERCISES 6+ EXTENSIONS


//EXERCISE 6
app.get('/sale', function (req, res) {
    const query = req.query.admin
    if (query == 'true') {
        const saleStore = store.map(i => {
            i.price /= 2
            return i
        })
        res.send([`Welcome Admin, the store is on 50% sale for you!`, saleStore])
    } else {
        res.send("you're not an admin")
    }

})
