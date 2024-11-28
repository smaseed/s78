const express = require('express');
const app = express()

const jwt = require('jsonwebtoken');
const { expressjwt: exjwt } = require('express-jwt')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



const path = require('path');

const mySecretKey = "My Super Secret Key";

const PORT = 3010;

const jwtMW = exjwt({
    secret: mySecretKey,
    algorithms: ['HS256']
});

let users = [
    {
        id: 1,
        username: "shabbir",
        password: "shabbir"
    },
    {
        id: 2,
        username: "mano",
        password: "mano"
    }
];

app.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    let foundUser = false;
    for(let user of users){
        if(username == user.username && password == user.password) {
            let token = jwt.sign({id: user.id, username: user.username}, mySecretKey, { expiresIn: '1h' });
            res.json({
                success: true,
                err: null,
                token
            });
            foundUser = true;
            break;
        } 
    }
    if (foundUser == false) {
            res.status(401).json({
                success: false,
                token: null,
                err: "Username and Password doesn't match"
            });
    }
});

app.get('/api/dashboard', jwtMW, (req, res) => {
    console.log(req);
    res.json({
        success: true,
        myContent: 'Secret Content that can only be visible to logged in people!!!'
    });
});

app.get('/api/summary', jwtMW, (req, res) => {
    console.log(req);
    res.json({
        success: true,
        myContent: 'Settings Page!'
    });
});


app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            success: false,
            officialError: err,
            err: "Username and Password is incorrect 2"
        });
    } else {
        next(err);
    }
});

app.listen(PORT, () => {
    console.log('Serving on PORT:', PORT)
});