
const mongoose = require("mongoose");
require('dotenv').config()

// const mongooURL = "mongodb://127.0.0.1:27017/";
// const mongooURL="mongodb+srv://Deepthi:chuhi%4022@cluster0.708zgwd.mongodb.net/"
const mongooURL=process.env.DB_URL
mongoose.connect(mongooURL);

const db=mongoose.connection

// console.log('hi this is db',db)

db.on('connected',()=>{
    console.log('connected sucessfully to Mongodb')
})

db.on('error',(err)=>
{
    console.err(`Mongodb connection error`)
})

db.on('disconnected',()=>{
    console.log('Disconnected from mongodb')
})

module.exports=db
