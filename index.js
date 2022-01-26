const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
// 이렇게 두줄은 application/json 된것을 분석해서 가져올수 있게 하기위해서 두줄 넣는것
app.use(bodyParser.json());

const mongoose = require(`mongoose`)
mongoose.connect('mongodb+srv://Leedong:12341234@cluster0.h1exq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB connected....'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World~~ 안녕ㅎ'))

app.post('/register', (req, res) => {

  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어줌

  const user = new User(req.body)

  user.save((err, doc) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))