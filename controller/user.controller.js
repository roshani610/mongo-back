var User=require('../model/user.model');

exports.register=(req,resp)=>{
    if(req.body.content === ""){
        return resp.status(404).send({"meesage":"data can not be empty","status":404});
    }
    User.create(req.body).then(()=>{
       // console.log("regi",JSON.stringify(resp));
       resp.status(200).send({"meesage":"Registered","status":200});
    }).catch(err=>{
         resp.status(500).send(err); 
    })
}
exports.login=(req,resp)=>{
    if(req.body.content === ""){
        return resp.status(404).send("data can not be empty");
    }
    User.find(req.body).then((data)=>{
        console.log(data);
        if(data.length >=1){
            resp.status(200).send({"meesage":"login successful","status":200});
        }else{
            resp.status(500).send({"message":"Username or Password is incorrect"});
        }
    })
}