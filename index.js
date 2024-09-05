/*
Node js - 

Implement a GET API in Node.js that takes two numbers as parameters, adds them, and sends the result. Create validations around input parameters to accept numeric values. Additionally, incorporate authentication using middleware.
*/

const express = require('express');
const app = express();

const { generateToken, validateToken } = require('./auth');
const { validateQueryParams } = require('./validate');

app.get('/token',(req, res, next)=>{
    
    res.status(200).json({
        access_token: generateToken()
    })
})

app.use('/',(req,res,next)=>{
    try{
        validateToken(req.headers.authorization)
    }catch(err){
        res.status(401).json({
            Error: "Invalid Access token"
        })
    }
    next();
})

app.get('/', (req, res, next)=>{
    console.log(req.query);
    
    const {num1 , num2} = req.query;
    try{
        validateQueryParams({num1 , num2})
    }catch(err){
        res.status(400).json({
            Error: "Validation Failed"
        })
    }
    res.status(200).json({
        sum: parseInt(num1)+parseInt(num2)
    });
})


app.listen(3000, ()=>{
    console.log('server is up and runiing on port 3000');
})