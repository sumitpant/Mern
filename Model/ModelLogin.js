const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    Email:String,
    password:String
},{collection:'admin'})

//create a scema to display list
const usersSchema=new mongoose.Schema({
       Name:String,
       Date:Date,
       Time:String,
       NoOfPeople:Number,
       Contact:Number
},{collection:'reserved'})



module.exports={
    userSchema:userSchema,
    usersSchema:usersSchema
}