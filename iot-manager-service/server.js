const express = require('express')
const app = express()
const db = require('mongoose')
const config = require('../config')

app.get('/', (req, res) => {
    res.send('Comming Soon')
})

const device = express.Router()
require('./routers/device')(device, null)
app.use('/device', device)

const service = express.Router()
require('./routers/service')(service, null)
app.use('/service', service)

const list = express.Router()
require('./routers/blacklist')(list, null)
app.use('/blacklist', list)

app.listen(config.server.port, () => { console.log(`Server is running on http://127.0.0.1:${config.server.port}`)})