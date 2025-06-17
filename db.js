const mongoose = require("mongoose");
require('dotenv').config()
const mongooURL=process.env.DB_URL
mongoose.connect(mongooURL);

const db=mongoose.connection

db.on('connected',()=>{
    console.log('connected sucessfully to Mongodb')
})

db.on('error',(err)=>
{
    console.error(`Mongodb connection error`)
})

db.on('disconnected',()=>{
    console.log('Disconnected from mongodb')
})

module.exports=db
