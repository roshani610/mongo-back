const express=require('express');
const body_parser=require('body-parser');
const dbConfig=require('./config/database.config');
const UserRoutes=require('./routes/user.routes.js');
const productRoutes=require('./routes/products.routes.js');
const cors=require('cors');

var Connection = require('tedious').Connection;  
var connection = new Connection(dbConfig.config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    if(err){
        console.log(err)
    }
    console.log("Connected");  
    executeStatement();
});

connection.connect();

var Request = require('tedious').Request;  

  
    function executeStatement() {  
        request = new Request("SELECT TOP (1000) [ID],[Name] FROM [coinseller].[dbo].[userData]", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
        });
      
        connection.execSql(request);  
    }  
    

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

app.listen(3000,()=>{
    console.log("App is listening to port 3000");
})
/* https.createServer({
    key: fs.readFileSync('./certificate/key.key'),
    cert: fs.readFileSync('./certificate/cert.crt'),
}, app)
.listen(3000); */
