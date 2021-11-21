const express = require('express');
const axios = require('axios');
const redis = require('redis');
var morgan = require('morgan');
var cache = require('./cache');

var app = express();
const client = redis.createClient();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
const EXPIRATION = 300;


app.get("/rockets/:id",async(req,res,next)=>{
    try{
        var response = await cache(client,req.params.id,EXPIRATION);
        res.json(response);
    }
    catch(err){
        res.send(err);
    }

});

app.get("/rockets/one/:id",async(req,res,next)=>{
    try{
        var response = await cache(client,req.params.id,EXPIRATION);
        res.json(response);
    }
    catch(err){
        res.send(err);
    }
});

app.listen(PORT,(err)=>{
    if(err) console.error(err);
    else console.log(`Server started sucessfully on port:${PORT}`);
});