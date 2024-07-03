const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const app = express()
require('dotenv').config()
const {readdirSync} = require('fs')

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors(
    {
          origin:["https//deploy-mern-1whq.vercel.app"],
          methods: ["POST", "GET"],
          credentials: true
      }
            ))


//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () =>{
    db()
   app.listen(PORT, ()=>[
     console.log("listening:", PORT)
   ])
}

server()

//72GdpiSj2xWwBg2A
