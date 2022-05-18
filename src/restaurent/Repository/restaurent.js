

const mongoDBConfig = require("../../../config/mongodb");
const ObjectId = require("mongodb").ObjectId;

exports.add = async (restaurent1) => {
     const collection = mongoDBConfig.getCollection("restaurent");
     try{
     await collection.insertOne({name:restaurent1.name, location:restaurent1.location , contact:restaurent1.contact});
     } catch(err){
         console.log(err);
         return false;
     }
     return true;
    }


exports.get = async () => {
    const collection = mongoDBConfig.getCollection("restaurent")
    try{
        const results = await collection.find().toArray();
        return results;
    }catch(err){
        console.log(err);
        return -1
    }
}

exports.getByLocation = async (_location) => {
    const collection = mongoDBConfig.getCollection("restaurent")
    try{
        const filterExpression = {location:_location}
        const results = await collection.find(filterExpression).toArray();
        return results;
    }catch(err){
        console.log(err);
        return -1
    }
}


exports.update = async (restaurent1) => {
    const collection = mongoDBConfig.getCollection("restaurent");
    try{
        const filter = {_id : ObjectId(restaurent1._id)};
        const update = { $set : {name:restaurent1.name , location:restaurent1.location , contact : restaurent1.contact}};

    await collection.findOneAndUpdate(filter,update);

    } catch(err){
        console.log(err);
        return false;
    }
    return true;
   }


   exports.delete = async (id) => {
    const collection = mongoDBConfig.getCollection("restaurent");
    try{
        const filter = {_id : ObjectId(id)};
    await collection.findOneAndDelete(filter);

    } catch(err){
        console.log(err);
        return false;
    }
    return true;
   }