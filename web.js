var express = require('express');
var app = express();
var fs = require('fs');


data = fs.readFileSync("index.html");

app.use(express.logger());

//adding bootstrap
//app.use(express.static(__dirname + '/bootstrap'));

app.get('/', function(request, response) {

var buffer = new Buffer(data);

response.write(buffer.toString());
//response.write("Hello Kayla!");
response.end();

//response.send(buffer.toString());
//response.send('Hello Kayla!');

});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
    
});
