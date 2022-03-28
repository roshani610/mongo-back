// module.exports = {  
//     config :{
//     server: 'localhost',  //update me
//     authentication: {
//         type: 'default',
//         options: {
//             userName: 'roshani12', //update me
//             password: 'sa@123'  //update me
//         }
//     },
//     options: {
//         // If you are on Microsoft Azure, you need encryption:
//         encrypt: true,
//         database: 'coinseller'  //update me
//     }
//  }
// };  

module.exports = {
    HOST: "localhost",
    PORT: "1433",
    USER: "roshani12",
    PASSWORD: "sa@123",
    DB: "coinseller",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };