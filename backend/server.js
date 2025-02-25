const express = require("express")
const server = express()
const cors = require("cors")
const mongoose = require("mongoose")
const createUserInfo = require("./models/create-model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

server.use(cors({
    origin:"http://localhost:5173"
}))

server.use(express.urlencoded({extended:false}))
server.use(express.json())

server.get("/",(req,res)=>{
    res.json("fuck")
})


server.post("/account-create",async(req,res)=>{
    try {

        const RequestUserName = req.body.username;
        const RequestEmail = req.body.email;
        const RequestPassword = req.body.password;
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(RequestPassword,salt)
    const userInfo = {
        username:RequestUserName,
        email:RequestEmail,
        password:hashPass
    }
    const findingUserEmail = await createUserInfo.findOne({email:RequestEmail})

    if(!findingUserEmail){
      const UserInfo =  await createUserInfo.create(userInfo)
        const setId = {id:1,UserInfo}
        const token = jwt.sign(setId,process.env.ACCESS_TOKEN,{expiresIn:"1hr"})
        res.json({
            status:200,
            message:"Created Success",
            access_token:token
        })
    }else{
        res.json({
            status:500,
            message:"Already Created"
        })
    }


        
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})

server.post("/login-certificate",async(req,res)=>{
    try {

        const gettingEmail = req.body.email;
        const gettingPassword = req.body.password;

        const check = await createUserInfo.findOne({email:gettingEmail})
        if(check){
            const ExistingUsrPassword = check.password
            bcrypt.compare(gettingPassword,ExistingUsrPassword, (err,isMatch)=>{
                if(err){
                    res.json({
                        status:500,
                        message:err.message
                    })
                }else if(isMatch){
                    const setId = {id:1,check}
                   const access_token= jwt.sign(setId,process.env.ACCESS_TOKEN,{expiresIn:"1hr"})
                    res.json({
                        status:200,
                        message:"Correct Passkey",
                        access_token:access_token
                    })
                }else{
                    res.json({
                        status:400,
                        message:"not same"
                    })
                }
            })

        }else{
            res.json({
                status:500,
                message:"Account Not found"
            }) 
        }
    } catch (error) {
        res.json({message:error.message})
    }
})

mongoose.connect("mongodb://jplussince34:N12B6l0Q6lANu8cm@users-shard-00-00.0wu0w.mongodb.net:27017,users-shard-00-01.0wu0w.mongodb.net:27017,users-shard-00-02.0wu0w.mongodb.net:27017/user-info?ssl=true&replicaSet=atlas-2leybj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Users")
.then(()=>{
    console.log("Database Connect Success")
}).catch((error)=>{
    console.log(error.message)
})

server.listen(process.env.PORT,()=>{
    console.log(`Server Starts On ${process.env.PORT}`)
})

//jplussince34
//N12B6l0Q6lANu8cm