module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("tb_users", {
       
        name: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        }
        
    });
    return User;
  };

