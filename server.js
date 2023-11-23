const express = require('express')
const app = express()
const port = 80

const question = [
    "What’s your favorite song and why?",
    "What’s your favorite month of the year and why?",
    "What’s your favorite place you’ve traveled to and why?",
    "What’s your favorite Christmas movie and why?",
    "If you could invite 3 famous people to dinner, who would they be?",
    "If you could travel anywhere in the world, where would it be?",
    "What’s your favorite food?",
    "What’s your favorite holiday and why?",
    "If they were making a tv show or movie about your life, what celebrity would play you?",
    "What’s your favorite TV series and/or book?",
    "If you could pick another name for yourself, what would it be and why?",
    "Would you rather live at the beach or the mountains?",
    "If you became president what would be the first thing you would do and why?",
    "If you could have any superpower what would it be?",
    "What is your favorite childhood memory?",
    "If you had to live the rest of your life as an animal what would it be?",
    "What is your dream car?",
    "What was the last book you read?",
    "If you could be famous for something what would it be?",
    "Would you rather have arms or legs?"
]


app.get('/', (req, res) => {
    let n = Math.floor(Math.random() * question.length)
    console.log('random number is ' + n);
    res.send(
        '<div style="text-align: center; margin-top: 100px;"><h1>' +
            (question[n]) +
        '</h1></div>'
        )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})