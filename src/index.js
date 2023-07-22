const express = require('express')
const cors    = require('cors')
const app     = express()

app.use(cors())
app.use(express.json());

// import rotas

const routes = require('./routes/routes')

app.use(routes)

module.exports = app