const express = require('express')
const morgan = require('morgan')
require("dotenv").config()
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(morgan('tiny'))

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

const localServer = createProxyMiddleware({ target: process.env.URL || 'http://192.168.0.105:7272' });
app.use("/api/v1", localServer)

app.listen(7272, () => { console.log('App listening on port 7272') })