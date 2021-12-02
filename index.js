require('dotenv').config()
const express = require('express')

const server = express();

const PORT = process.env.PORT || 8080 //pulls this from heroku

server.get('/api/users', (req, res)=>{
    res.json([
        { id: 1, username: `darwin`, pwd: "phasma" },
        { id: 2, username: `wallace`, pwd: "monster_truck" },
        { id: 3, username: `maxwell`, pwd: "pizza" },
    ])
})

server.listen(PORT, ()=>{
    console.log("listening on port ", PORT)
})

