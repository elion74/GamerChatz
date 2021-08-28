const app = require('express')()// express app
const http = require('http').Server(app);// server
var io = require("socket.io")(http);// socket.io

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('welcome');
});




http.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/ `)
});