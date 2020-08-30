// // EXERCISE 1
// //Ex. 1
// //Check whether "shoobert@dylan" is a valid email (should be false)
// var validator = require('validator');
// console.log("email", validator.isEmail('shoobert@dylan'))

// //Ex. 2
// //Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
// console.log("mobile", validator.isMobilePhone("786-329-9958",['en-US' ]))

// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"
// //Ultimately, it should print "im so excited"

// console.log("text",validator.blacklist("I'M SO EXCITED!!!~!", blacklist).toLowerCase())





//EXERSICE 2
var faker = require('faker');
const { fake } = require('faker');
 
// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

const makeHuman = function(number){
    for (i=0;i<number;i++){
        let person =  faker.helpers.createCard()
        let name = person.name
        let img = faker.image.avatar()
        let company = person.company.name
        console.log({name,company,img})
    }
}

makeHuman(2)