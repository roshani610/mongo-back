const express=require('express');
const body_parser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
// const db = require("./model");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

require("./routes/user.routes")(app);

app.get("/",function(req,resp){
    resp.status(200).send({"message": "hello world"});
})

app.listen(8080,()=>{
    console.log("App is listening to port 8080");
})

