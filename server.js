  
var app = require('express')();
var server = require('http').Server(app);

 app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });


  server.listen(1925, function(){
    console.log('listening on *:1925');
  });