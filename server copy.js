const express=require('express');
const body_parser=require('body-parser');
const dbConfig=require('./config/database.config');
const UserRoutes=require('./routes/user.routes.js');
const cors=require('cors');

// /** Database Connection */
// var Connection = require('tedious').Connection;  
// var connection = new Connection(dbConfig.config);  
// connection.on('connect', function(err) {  
//     // If no error, then good to proceed.
//     if(err){
//         console.log(err)
//     }
//     console.log("Connected");  
// });
// connection.connect();
// /** Database Connection */

const app=express();
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors());
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
const db = require("./model");
db.sequelize.sync();

app.get("/",function(req,resp){
    resp.status(200).send({"message": "hello world"});
})

/** Routes */
app.use("/user",UserRoutes);

app.listen(3000,()=>{
    console.log("App is listening to port 3000");
})
/* https.createServer({
    key: fs.readFileSync('./certificate/key.key'),
    cert: fs.readFileSync('./certificate/cert.crt'),
}, app)
.listen(3000); */
