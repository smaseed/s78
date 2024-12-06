const express = require('express');
const { MongoClient } = require('mongodb');
const app = express()

const jwt = require('jsonwebtoken');
const { expressjwt: exjwt } = require('express-jwt')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://18.191.208.115:8080');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const uri = "mongodb+srv://shabbir:shabbir@cluster0.xvshptb.mongodb.net/tax_credits?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
client.connect()
.then(() => {
    console.log('Connected successfully to MongoDB');
})
.catch(err => {
    console.error(err);
});

const path = require('path');

const mySecretKey = "My Super Secret Key";

const PORT = 3000;

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



app.get('/api/getTypeChartData', jwtMW, async (req, res) => {
    try {

        const database = client.db("tax_credits");
        const collection = database.collection("technology_type");
    
        // Your database operations here
        const documents = await collection.find().toArray();
        console.log(documents);
        res.json(documents);
      } catch {
        console.log("Error with Database Connection")
      }
  });

app.get('/api/getInvestmentsData', jwtMW, async (req, res) => {
    try {

        const database = client.db("tax_credits");
        const collection = database.collection("investments");

        const documents = await collection.find().toArray();
        res.json(documents);
      } catch {
        console.log("Error with Database Connection")
      }
  });

app.get('/api/get2015InvestmentData', jwtMW, async (req, res) => {
    try {

        const database = client.db("tax_credits");
        const collection = database.collection("2015");

        const documents = await collection.find().toArray();
        console.log(documents);
        res.json(documents);
      } catch {
        console.log("Error with Database Connection")
      }
  });

app.get('/api/get2024InvestmentData', jwtMW, async (req, res) => {
    try {

        const database = client.db("tax_credits");
        const collection = database.collection("2024");

        const documents = await collection.find().toArray();
        console.log(documents);
        res.json(documents);
      } catch {
        console.log("Error with Database Connection")
      }
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