var express = require('express');
var bodyParser = require('body-parser');
var {save, selectAll} = require('../database-mongo/index.js')
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

app.use(bodyParser.json())

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/movie', function (req, res) {
  //get all the movies in the database, which represent user's favorites
  console.log('get working')
  selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/movie', function (req, res) { 
 console.log('req body', req.body) 
  save(req.body).then(() =>
    res.status(201).send()
  ) //
   
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

