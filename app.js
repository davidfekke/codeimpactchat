
/**
 * Module dependencies.
 */

const express = require('express');
var app = express();
const http = require('http');
const server = http.createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/public/index.html');
});

var ioRoutes = require('./routes/ioroutes')(io);
app.use('/io', ioRoutes);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
