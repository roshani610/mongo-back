const express=require('express');
const router=express.Router();
const userController=require('../controller/user.controller');

router.get("/",(req,resp)=>{
    //resp.render("Login");
    resp.send("hello user");
})

router.post("/register",userController.register);

router.post("/login",userController.login);
module.exports=router;