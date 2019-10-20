  
var app = require('express')();
var server = require('http').Server(app);
const PORT = process.env.PORT || 5000

 app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });


  server.listen(PORT, function(){
    console.log('listening on ' + PORT);
  });