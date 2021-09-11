const express = require('express');


const app = express();

app.use(express.static(__dirname + '/public'));

const http = require('http').createServer(app);

// app.get('/', (req, res) => {
//     res.send('Hello Diego');
// });

const socket = require('./socket');
socket(http);

module.exports = http;