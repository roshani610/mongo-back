module.exports = app => {
    const users = require("../controller/user.controller");
    var router = require("express").Router();
    // Create a new User
    router.post("/", users.create);
     // Login user
    router.get("/login", users.login);

    router.get("/call", users.callQuery);
    // Retrieve all users
    router.get("/", users.findAll);
    // Retrieve all published users
    router.get("/published", users.findAllPublished);
    // Retrieve a single User with id
    router.get("/:id", users.findOne);
    // Update a User with id
    router.put("/:id", users.update);
    // Delete a User with id
    router.delete("/:id", users.delete);
    // Delete all users
    router.delete("/", users.deleteAll);
    app.use('/api/users', router);
  };