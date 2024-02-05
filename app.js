const path = require('path');
const operations = require("./operations");
const WebSocket = require('ws');
const express = require('express');
const app=express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'views')));
app.use('/style', express.static(path.join(__dirname, 'style')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/', express.static(path.join(__dirname)));
app.set('view engine', 'ejs');

app.get('/', operations.getwillUBeMy);




app.get('/willUBeMy', operations.getwillUBeMy);
app.get('/thxLove', operations.getThxLove);



const { getRandomLine } = require('./operations');
app.get('/getRandomLine', (req, res) => {
  getRandomLine('db.txt')
      .then(line => res.send({ line }))
      .catch(err => {
          console.error(err);
          res.status(500).send({ error: 'Server error occurred' });
      });
});





app.listen(3000, () => {
  console.log('listening on *:3000');
});