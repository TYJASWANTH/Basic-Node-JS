const express = require("express");
const controller = require("../controller/restaurent");

const router = express.Router();


router.post("/",controller.add); //here we are adding something - ADD 
router.get("/",controller.get);
router.get("/location/:city",controller.getByLocation);
router.put("/",controller.update);
router.delete("/:id",controller.delete); 
//router.get("/contact/:ph_no",controller.getByphno);

module.exports= router;