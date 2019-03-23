const express = require('express')
const app = express()
const db = require('mongoose')
const config = require('../config')

app.get('/', (req, res) => {
    res.send('Comming Soon')
})

app.listen(config.server.port, () => { console.log(`Server is running on http://127.0.0.1:${config.server.port}`)})