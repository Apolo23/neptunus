'use strict'

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Front-End para Neptunus');
})

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});