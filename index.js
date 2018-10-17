var path = require('path');
var express = require('express');
var app = express();
 
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT);

app.get('/*', function (req, res) {
  console.log("Aqui abestado...");

  res.sendfile(path.join(__dirname + '/dist/index.html'));
});

