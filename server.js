var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.get('/webhook', (req, res) => {
    io.emit('update', 'someVersionId');
    return res.sendStatus(200);
})

io.on('connection', function(socket){
    console.log('a user connected');
});
  
http.listen(3000, function(){
    console.log('listening on *:3000');
});