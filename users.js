// const express=require('express')

// const router=express.Router()
// const User=require('./userModel')

// // routes
// // CRUD Operations
// // View/Read

// router.get('/users',async(req,res)=>{
//     try{
//         const users=await User.find();
//         res.status(200).json(users)
//     }
//     catch(err){
//         res.status(500).json({
//             success:false,message:err.message
//         })
//     }
// })

// // create
// router.post('/users',(req,res)=>{
//     try{
//         const {name,age,weigth}=req.body;
//         const user=new User({name,age,weigth});
//         await User.save(user)
//     }
//     catch(err){
//         res.status(500).json({
//             success:false,
//             message:err.message
//         })
//     }
// })