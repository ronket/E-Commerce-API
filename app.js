const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');


// app.use(navigate to router)
/**
 * 0. home
 * 1. products 
 * 2.checkouts ( than have to be registered)
 * 3.login
 * 4.register
 */



const port = process.env.PORT || 3000;


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`listening on port ${port}...`))
    } catch (error) {
        console.log(error,'connection to database failed');
    }
}


start();


/**
 * 1. store password hashed 
 */