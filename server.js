  
var app = require('express')();
var server = require('https').Server(app);

 app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });


  server.listen(443, function(){
    console.log('listening on *:443');
  });