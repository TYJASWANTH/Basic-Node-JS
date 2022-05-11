const express = require("express");
const userRoutes = require("./src/user/routers/user");

const server = express();
server.listen(4400);

//configure router
server.use("/api/user",userRoutes);
  
server.get("/",  (req, res) => {
    res.end("hello from expresss.js");

});

console.log("listeing to 4400");


//remember go to postman and type url localhost:4400/api/user/(register or login)
