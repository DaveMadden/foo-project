require('dotenv').config()
const express = require('express')

const server = express();

const PORT = process.env.PORT || 8080 //pulls this from heroku

server.get('/api/users', (req, res)=>{
    res.json([
        { id: 1, username: `darwin` },
        { id: 2, username: `wallace` },
        { id: 3, username: `maxwell` },
    ])
})

server.listen(PORT, ()=>{
    console.log("listening on port ", PORT)
})

