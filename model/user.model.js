const mongo=require('mongoose');
const userSchema=mongo.Schema({
    uName:String,
    pwd:String
},{
    timestamp:true
})

module.exports=mongo.model('User',userSchema);

