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
exports.editUser=(req,resp)=>{
    if(req.body.content === ""){
        return resp.status(404).send("data can not be empty");
    }
    User.updateOne(req.body).then(data=>{
        resp.status(200).send({"message":"Updated successfully",status:200});
    }).catch(err=>{
        resp.send(500).send({"message":err,status:500});
    })
}
exports.listUser=(req,resp)=>{
    console.log("req::",req.body.search);
    let where={};
    if(req.body.search.value != undefined && req.body.search.value != "" ){
        where={ $text: { $search: req.body.search.value } }
    }
    User.find(where).then((data)=>{
        resp.status(200).send({"data":data,"length":data.length,"status":200});
    }).catch(err=>{
        console.log(err);
        resp.status(500).send({"data":err,status:500})
    })
}
exports.getUser=(req,resp)=>{
    User.findById(req.query.params).then((data)=>{
        resp.status(200).send({"data":data,status:200});
    }).catch(err=>{
        resp.status(500).send({"data":err,status:500})
    })
}
exports.deleteUser=(req,resp)=>{
    console.log(req.query.params);
    User.deleteOne({ "_id" : req.query.params }).then((data)=>{
        console.log("resp:",data);
        resp.status(200).send({"data":data,status:200});
    }).catch(err=>{
        resp.status(500).send({"data":err,status:500})
    })
    
}