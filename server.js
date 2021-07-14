const url = require('url')
const express = require('express')
const morgan = require('morgan')
const helmet = require("helmet")

const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(morgan('tiny'))
// app.use(helmet())

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

const localServer = createProxyMiddleware({ target: 'http://197.156.65.6:7272' });
app.use("/api/v1", localServer)

app.listen(7272, () => { console.log('App listening on port 7272') })