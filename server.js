const url = require('url')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

const localServer = createProxyMiddleware({ target: 'http://197.156.65.6:7272' });

app.use("/api/v1", localServer)

app.listen(8000, () => { console.log('App listening on port 8000') })