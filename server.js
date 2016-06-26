var express = require('express');
var app = express();

var fs = require('fs');
app.use(function(req, res) {
   fs.readFile('./movieData.json', function(err, data) {
      if ( err ) {
         console.error('Error : ', err);
         res.sendStatus(500);
         return;
      }
      var movies = JSON.parse(data);
      res.send(movies);
   });
});

app.listen(3000);