const db = require("../model");
const User = db.users;
const Op = db.Sequelize.Op;
// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a User
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      mobile:req.body.mobile
    };
    // Save User in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
 
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};
// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
  
};

// Find a single User Email and password
exports.login = (req, res) => {
  console.log(req)
  const email = req.query.email;
  const password = req.query.password;
  User.findOne(
    {
      where:{
        [Op.and]:[
          {email:email},
          {password:password}
        ]
       
      }
    })
    .then(data => {
      res.send({
        status: "success",
        data:data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + email
      });
    });

};
// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
  
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
    const id = req.params.id;
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all users."
          }); 
        });
  
};
// Find all published Users
exports.findAllPublished = (req, res) => {
  
};