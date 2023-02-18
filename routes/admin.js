
const express =require("express");
const router =express.Router();

router.get("/",(req, res, next)=>{
    res.send("This is a get method");
});
router.post("/user", (req , res, next)=>{
    res.send("This is a post method");
});

module.exports = router;