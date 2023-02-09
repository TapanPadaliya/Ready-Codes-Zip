//import { math } from './functions/maths';
//DotEnv Config
let dotenv = require('dotenv').config()

//Express Server-----------------------------------------------------------------------------------------
const express = require('express');
const app = express();

//Default App
app.get('/',
    function (req, res) {
        res.send("Default API Called")
    }
//).listen(process.env.PORT, () => console.log('🔰 Server Running at Port : '+process.env.PORT +' | '+ process.env.LocalHost +`:`+process.env.PORT+' | '+ process.env.URLHost +`:`+process.env.PORT));
).listen(process.env.PORT, () => console.log(`🔰 Server Running at Port : ${process.env.PORT} | ${process.env.LocalHost}:${process.env.PORT} | ${process.env.URLHost}:${process.env.PORT}`));

//Maths API 
app.get('/maths', function (req, res) {
    var math = require('./functions/maths');
    var x = 12;
    var y = 8;
    const added = math.add(x,y);
    res.send('sum of '+x+' and '+y+' is '+ added);
    //console.log('sum of '+x+' and '+y+' is '+ added);
})

//Prime API
app.get('/prime',
    function (req, res) {
        //Function Import
        var getPrimes = require("./functions/getPrimes");        
        //console.log(getPrimes);
        res.send('Result From Prime Function is : '+ getPrimes);
    }
)


//url API - shows details of URL
app.get('/url',
    function (req, res) {
        var urlinfo = req.originalUrl;
        res.send("You are at : "+urlinfo);
        console.log(urlinfo)
    }
)