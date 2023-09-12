const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const cookieParser = require('cookie-parser');

const app = express();

dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT

// Require Model
const Users = require('./models/userSchema');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello');
})

// Registration
app.post('/register', async (req, res) => {
    try {
        // Get body or data
        const name = req.body.name;
        const sname = req.body.sname;
        const universityCode = req.body.universityCode;
        const regNo = req.body.regNo;
        const rollNo = req.body.rollNo;
        const phoneNo = req.body.phoneNo;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            name : name,
            sname : sname,
            universityCode : universityCode,
            regNo : regNo,
            rollNo : rollNo,
            phoneNo : phoneNo,
            email : email,
            password : password
        });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error);
    }
})

// Login user
app.post('/login', async (req, res) => {
    try {
        // Get body or data
        const email = req.body.email;
        const password = req.body.password;

        const user = await Users.findOne({email : email});
        if(user) {
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch) {
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else {
                res.status(400).send("Invalid Credentials");
            }
        }else {
            res.status(200).send("Invalid Credentials");
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log("Server is running 3001")
})