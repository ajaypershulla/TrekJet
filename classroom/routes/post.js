const express = require ("express");
const router = express.Router();


//POSTS
//Index 
router.get("/" , (req, res)=>{
    res.send("Get for posts ");
})


//Show posts
router.get("/:id" , (req, res)=>{
    res.send("Get for post id ");
})


//Post posts
router.post("/" , (req, res)=>{
    res.send("post for posts");
})

//DELETE posts
router.delete("/:id" , (req, res)=>{
    res.send("delete for post id ");
})

module.exports = router;