const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./config/db')
const route = require('./routes')
app.use(cors())
app.use(bodyParser.json());
db.connect()

app.use(express.static('uploads'))

route(app)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3003)