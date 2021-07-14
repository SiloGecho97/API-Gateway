const express = require("express")
const app = require("express")()
const helmet = require("helmet")
const morgan = require('morgan')
const PORT = process.env.PORT | 7272
const axios = require('axios')
const apiAdapter = require('./apiAxios')
var router = express.Router()
const BASE_URL = process.env.APIURL | 'http://197.156.65.6:7171'
const api = apiAdapter(BASE_URL)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(helmet())
app.use(morgan('tiny'))
// app.use(routes)
router.get('*', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})
router.post("*", (req, res, next) => {
    api.post(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
})
router.put("*", (req, res, next) => {
    api.put(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
})
router.delete("*", (req, res, next) => {
    api.delete(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
})
router.patch("*", (req, res, next) => {
    api.patch(req.path, req.body).then(resp => {
        res.send(resp.data)
    })
})

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
})



module.exports = app