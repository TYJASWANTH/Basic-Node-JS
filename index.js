const express = require("express");
const userRoutes = require("./src/user/routers/user");
const mongodb = require("./config/mongodb");
const bodyParser = require("body-parser");
const restrout = require("./src/restaurent/routers/restaurent");
const auth = require("./src/middleware/auth")


const server = express();
server.listen(5000);

//connecting to database\
mongodb.localconnect();



//configure router
server.use(bodyParser.json());
server.use("/api/user",userRoutes); 
server.use("/api/restaurent",auth ,restrout);  //use can take multiple request handlers
  
server.get("/",  (req, res) => {
    res.end("hello from expresss.js");

});

console.log("listeing to 4400");


//remember go to postman and type url localhost:4400/api/user/(register or login)
