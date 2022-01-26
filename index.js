const express = require('express')
const app = express()
const port = 5000

const mongoose = require(`mongoose`)
mongoose.connect('mongodb+srv://Leedong:12341234@cluster0.h1exq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  
}).then(() => console.log('MongoDB connected....'))
  .catch(err => console.log(err))


app.get('/', (req,res) => res.send('Hello World~~ 안녕ㅎ'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))