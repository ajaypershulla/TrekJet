const express = require ("express");
const router = express.Router();



//Index - Route
router.get("/" , (req, res)=>{
    res.send("Get for users ");
})


//Show users 
router.get("/:id" , (req, res)=>{
    res.send("Get for user id ");
})


//Post users
router.post("/" , (req, res)=>{
    res.send("Post for show users");
})

//DELETE users 
router.post("/:id" , (req, res)=>{
    res.send("delete for  user  id ");
})


module.exports = router;