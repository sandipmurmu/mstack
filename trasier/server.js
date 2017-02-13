require('rootpath')();

//load modules 
var express = require('express');
var app = express();
var mongoose = require('mongoose');

//server port
// set our port
var port = process.env.PORT || 4040; 

app.use(express.static(__dirname + '/app'));

//route
//app.use('/', function(req, res){
   // res.redirect('/app');
//});

var server = app.listen(port, function(){
   console.log('server started, listening at ' + server.address().address + ':' + server.address().port );
})