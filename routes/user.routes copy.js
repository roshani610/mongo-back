const express=require('express');
const router=express.Router();
const userController=require('../controller/user.controller');

router.get("/",(req,resp)=>{
    //resp.render("Login");
    resp.send("hello user");
})

router.post("/register",userController.register);

router.post("/login",userController.login);
router.post('/editUser',userController.editUser);
router.post('/listUser',userController.listUser);
router.get('/getUser',userController.getUser);
router.delete('/deleteUser',userController.deleteUser)
module.exports=router;