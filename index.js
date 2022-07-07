const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 

app.get(/src/, (req, res) => {
  res.sendFile(`${__dirname}/${req.path}`);
});

http.listen(port, () => {
  console.log("Hi,There!")
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
