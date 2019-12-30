var Product=require('../model/product.model');

exports.addProduct=(req,resp)=>{
    if(req.body.content === ""){
        return resp.status(404).send({
            "message":"can not be empty"
        });
    }
    Product.create(req.body).then(()=>{
        resp.status(200).send({"message":"Product added successfully","status":200});
    }).catch(err=>{
        resp.status(500).send({"message":err});
    })
}
exports.listProducts=(req,resp)=>{
    console.log("req::",req.body.search);
    let where={};
    if(req.body.search.value != undefined && req.body.search.value != "" ){
        where={ $text: { $search: req.body.search.value } }
    }
    Product.find(where).then((data)=>{
        resp.status(200).send({"data":data,"length":data.length,"status":200});
    }).catch(err=>{
        console.log(err);
        resp.status(500).send({"data":err,status:500})
    })
}
exports.searchProduct=(req,resp)=>{
   
    Product.find({ $text: { $search: req.query.params } }).then((data)=>{
        resp.status(200).send({"data":data,status:200});
    }).catch(err=>{
        resp.status(500).send({"data":err,status:500})
    })
}
exports.getProduct=(req,resp)=>{
    //Product.findById
    Product.findById(req.query.params).then((data)=>{
        resp.status(200).send({"data":data,status:200});
    }).catch(err=>{
        resp.status(500).send({"data":err,status:500})
    })
} 
exports.updateProduct=(req,resp)=>{
    Product.updateOne(req.body).then(()=>{
        resp.status(200).send({"data":"updated successfully...",status:200});
        
    }).catch(err=>{
        resp.status(500).send({"data":err,status:500})
    })
}
exports.deleteProduct=(req,resp)=>{
    console.log(req.query.params);
    Product.deleteOne({ "_id" : req.query.params }).then((data)=>{
        console.log("resp:",data);
        resp.status(200).send({"data":data,status:200});
    }).catch(err=>{
        resp.status(500).send({"data":err,status:500})
    })
    
}