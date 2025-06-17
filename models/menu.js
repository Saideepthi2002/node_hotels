const mongoose=require('mongoose')

const Menu=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        enum:['chicken wings','spices','sauce']
    },
    num_sales:{
        type:String,
        required:true
    }
})

const MenuItems=new mongoose.model('MenuItems',Menu)

// console.log(MenuItems)

module.exports=MenuItems