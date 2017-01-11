var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, resp){

})

var port = 3000;
app.listen(port, function(){
  console.log('UP');
});
