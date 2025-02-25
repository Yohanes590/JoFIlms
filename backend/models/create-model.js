const mongoose = require("mongoose")
const createUser = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const createUserInfo = mongoose.model("user-information" , createUser)
module.exports =createUserInfo;