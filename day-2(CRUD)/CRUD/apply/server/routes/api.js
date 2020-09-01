const express = require('express')
const { ESRCH } = require('constants')
const router = express.Router()


const wordCounter = {
    potato:1
}// {word:count}

router.get('/',function(req,res){
    res.send("well hello there <|=)")
})
 

router.get('/sanity',function(req,res){
    res.send("app is up and running")
})

router.get('/word/:word',function(req,res){
    const word = req.params.word
    if(wordCounter[word]){
        res.send({count:wordCounter[word]})
        // console.log(wordCounter[word])
        // res.end()
    }else{
        res.send({count:0})
    }
})

router.post('/word/:word',function(req,res){
    const word = req.params.word
    if (wordCounter[word]){
        wordCounter[word]++
    }else{
        wordCounter[word] = 1
    }
    res.send({added:word,currentCount:wordCounter[word]})
})


router.post('/words/:sentence',function(req,res){
    let sentence = req.params.sentence
    let newCounter = 0
    let oldCounter = 0
    console.log(sentence)
    sentence = sentence.split(" ")
    for (word of sentence){
        if (wordCounter[word]){
            wordCounter[word]++
            oldCounter++

        }else{
            wordCounter[word] = 1
            newCounter++
        }
    }
    res.send({text:`added ${newCounter} new words. ${oldCounter} words already existed`,currentCount:-1})
})
module.exports = router