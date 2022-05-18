//create controller

const request  = require("express");
const User = require("../models/user")
 const repo = require("../Repository/userRepo")
const jwt = require("jsonwebtoken");
 //const register = (req,res) => {

module.exports.register = async(req,res) => {
    //Reading requests
    //repository functions
    console.log(req.body);
    const user = new User(req.body.name, req.body.email, req.body.password);
    const result = await repo.add(user); 
    if(result){
        return res.end("user is registered added");}
    else{
    return res.end("You have fales to rigester");
    }
}

//const login = (req,res) => {

module.exports.login = async (req,res) => {
    //check if email and password is correct
    const email = req.body.email;
    const user = await repo.getByEmail(email);
    if(!user || (user.password != req.body.password)){
        return res.status(400).send("Invalid details");
    } 
    else{
        //create jws (jason web token) tokents
        const token = jwt.sign(
       {userid:user._id}, 
       "THISISMYPRIVATEKEY",
       {
           expiresIn : "2h"
       }
        );
       
        //sent jwt token in responce.
       return res.status(200).send(token);
        }
  
    res.end("you are logged in");
}