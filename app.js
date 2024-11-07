const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');



app.listen()



const port = process.env.PORT || 3000;


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}


start();


/**
 * 1. store password hashed 
 */