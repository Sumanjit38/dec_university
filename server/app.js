const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
require('./db/conn');
//mongoDB();
const port = process.env.PORT

// Require Model
//const Users = require('./models/userSchema');
//const cookieParser = require('cookie-parser');
//const authenticate = require('./middleware/authenticate')


app.use(express.json());
app.use('/register', require('./routes/Register'));
//app.use(express.urlencoded({extended : false}));
//app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello');
})


/*
// Logout Page
app.get('/logout', (req, res) => {
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("User Logged out")
})

// Authentication
app.get('/auth', authenticate, (req, res) => {

})
*/

// Run Server
app.listen(port, () => {
    console.log("Server is running 3001")
})
