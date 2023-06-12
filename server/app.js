require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const notes_router = require('./routers/notes.router')

const app = express()

// middleware
app.use(express.json())
app.use(cors({ origin: "https://mazhugasergei.github.io" }))
app.use((req, res, next)=>{
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/notes', notes_router)

// connect to db
mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    // listening for requests
    app.listen(process.env.PORT, ()=>{
      console.log(`listening`)
    })
  })