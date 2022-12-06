const express = require("express");
const router = express.Router();


// Here we are using destructuring
const { registerUser, loginUser, getAllUsers } = require("../controller/user");
const validateToken = require("../middleware/validate");

// router.get("/", userController.getAllUsers)

// IF you are authorized then only you would be able to see users list
router.get("/", validateToken, getAllUsers);



// Registering
router.post("/register", registerUser)

// // Login
router.post("/login", loginUser)

// router.get("/:id", userController.getUserById)

// router.put("/:id", userController.updateUser)

// router.delete(":/id", userController.deletUser);

module.exports = router;