var express = require('express'), app = express(), port = 3000;

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(port);
