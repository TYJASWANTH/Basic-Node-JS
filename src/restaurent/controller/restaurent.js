const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
const restaurent = require("../models/restaurent")
const repo = require("../Repository/restaurent");


exports.add = async (req,res) => {
 const restaurent1 = new restaurent(req.body.name , req.body.location, req.body.contact);
 const result = await repo.add(restaurent1);

 if(result){
     return res.end("resautant is added")
 }
 else
 return res.end("restaurent is not added");
}

exports.get = async (req,res) => {
    const results =  await repo.get();

    if(results==-1){
        return res.send("failed to get records");
    }else{
        return res.send(results);
    }
}

exports.getByLocation = async (req,res) => {
    const results =  await repo.getByLocation(req.params.city);

    if(results==-1){
        return res.send("failed to get records");
    }else{
        return res.send(results);
    }
}

exports.update = async (req,res) => {
    const restaurent1 = new restaurent(req.body.name , req.body.location, req.body.contact , req.body.id);
    const result = await repo.add(restaurent1);
   
    if(result){
        return res.end("resautant is added")
    }
    else
    return res.end("restaurent is not added");
   }


exports.delete = async (req,res) => {
    const id = req.params.id;
    const result = await repo.delete(id);
   
    if(result){
        return res.end("resautant is deleted")
    }
    else
    return res.end("restaurent is not deleted");
 }