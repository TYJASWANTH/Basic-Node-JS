const mongodb = require("mongodb");


const mongoDbClient = mongodb.MongoClient;

const url = "mongodb+srv://jashu123:12345@cluster0.lgiod.mongodb.net/FoodDelevaryAppDB?retryWrites=true&w=majority";
  var client;
  
exports.localconnect = async() => {
   
   try{
      client = await mongoDbClient.connect(url);
      console.log("the database has been connected");
   }catch(err){
      console.log(err);
   }

   
}

//now we have to connect the abopve with server or gateway

exports.getCollection = (collectionName) => {
   return client.db('FoodDelevaryAppDB').collection(collectionName);
}