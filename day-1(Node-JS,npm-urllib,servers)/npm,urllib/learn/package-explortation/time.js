const moment = require('moment')


let timeNow = new Date()
console.log(timeNow)
let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017




const urllib = require('urllib')

// urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
//     console.log(response.toString())
// })

const movie = "The Lion King"
const key = '2c9dd12b'

urllib.request(`http://www.omdbapi.com/?apikey=${key}&t=${movie}`,function(err,res){
    if(err){
        console.log("request err")
    }
    let response = JSON.parse(res.toString())
    console.log(response.Released)
})





// http://www.omdbapi.com/?apikey=2c9dd12b&t=The Lion King

// urllib.request(`http://www.omdbapi.com/?apikey='2c9dd12b'&t=The%Lion%King`,function(err,res){
//     if(err){
//         console.log("request err")
//     }
//     console.log(res)
// })

