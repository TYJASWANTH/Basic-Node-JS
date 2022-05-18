 const jwt  = require("jsonwebtoken");
 
 const authenticate = (req, res , next) =>{
     //resd token
     const token  =  req.headers["authorization"];
     if(!token){
     return res.status(401).send("unauthorized : required token");
     }
     //verifying the token
     try{
     const payload = jwt.verify(token , "THISISMYPRIVATEKEY" ) // =>  here the key must have a seperate configuration as it should be secured
    req.userId = payload; 
    console.log( req.userId); //just to find out the id (not required)
    } catch(err){
         return res.status(401).send("unauthorized :invalid token");
    }

     //now if token is valid proceed to next request
           next(); //the command to passs the request to next middleware

     //else return 401 responce
     // res.status(401).send("unauthorized");
 }

 module.exports =  authenticate;