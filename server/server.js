const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./config/db')
const route = require('./routes')
// const socketIo = require('socket.io');
// const http = require('http');
// const server = http.createServer(app);
// const io = socketIo(server);
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')

const notifications = require('./until/Notifications')

app.use(cors())
app.use(bodyParser.json());
db.connect()

app.use(express.static('uploads'))

route(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3002',
        methods: ['GET', 'POST']
    }
})

notifications(io)

app.get('/', function (req, res) {
  res.send('Hello World')
})

server.listen(3003)