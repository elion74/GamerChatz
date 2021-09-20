const app = require('express')()// express app
const http = require('http').Server(app);// server
var io = require("socket.io")(http);// socket.io
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./config/passport.js');

const PORT = process.env.PORT || 5000;

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true })); // creates session and signs ID
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send('Welcome to GamerChatz API');
});

app.use('/auth', require('./routes/auth_routes.js'));


app.use(function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
})


app.get('/protected', (req, res) =>{
    res.send(`Hello ${req.user.displayName}`);
});


http.listen(PORT, () => {
    console.log(`server running on ${process.env.API_URL} `)
});
