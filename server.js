const express=require('express');
const body_parser=require('body-parser');
const mongo=require('mongoose');
const dbConfig=require('./config/database.config');
const UserRoutes=require('./routes/user.routes.js');
const productRoutes=require('./routes/products.routes.js');
const cors=require('cors');
const https=require('https');
const fs=require('fs');
//connect to DB
//mongo.Promise=global.Promise;
mongo.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("connected successfully");
}).catch(err=>{
    console.log("not able to connect:",err);
})

const app=express();
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors());
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

app.get("/",function(req,resp){
    resp.status(200).send({"message": "hello world"});
})
app.use("/user",UserRoutes);
app.use("/product",productRoutes);

/* app.listen(3000,()=>{
    console.log("App is listening to port 3000");
}) */
https.createServer({
    key: fs.readFileSync('./certificate/key.key'),
    cert: fs.readFileSync('./certificate/cert.crt'),
}, app)
.listen(3000);
