const express =require("express");
const router =express.Router();

router.get("/shop",(req, res, next)=>{
    res.send("THis is the shop route");
})


module.exports = router;