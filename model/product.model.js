
const mongo=require('mongoose');
const productSchema=mongo.Schema({
    name:String,
    price:Number,
    qty:Number,
    tags:[],
    size:{}
},{
    timestamp:true
})

module.exports=mongo.model('Product',productSchema);

