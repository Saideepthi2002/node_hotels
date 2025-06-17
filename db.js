
const mongoose = require("mongoose");

const mongooURL = "mongodb://127.0.0.1:27017/";

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
