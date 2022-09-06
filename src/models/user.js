const { is } = require("express/lib/request")
const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
   type:String,
   required:true,
   validator(value){
       if(!validator.isEmail(value)){
  throw new Error("invalide email")
       }
   }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    },
    date:{
        type:Date,
        default:Date.now
    }

})
//we nead to create collection
const User = mongoose.model("User",userSchema);
module.exports= User;