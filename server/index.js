const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://hoylee:z98756525@cluster0.trsqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect(mongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
    .then(()=>console.log('mongoDB connected!'))
    .catch(err=> console.log(err))

app.use('/api/model',require('./model'))