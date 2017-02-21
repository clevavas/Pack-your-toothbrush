var express = require('express');
//var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
//var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var index = require('./app/routes/index');

// Just some options for the db connection
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } }; 

//mongoose.connect('YOUR_DB_LOCATION', options);
//var db = mongoose.connection;

//db.on('error', console.error.bind(console, 'connection error:'));

// Log with Morgan
//app.use(morgan('dev'));

// parse application/json and look for raw text                                   
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

// Static files
app.use(express.static(__dirname + '/public')); 

app.use('/', index);

app.listen(port);
console.log('listening on port ' + port);