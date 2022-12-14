const express = require("express");
const router = express.Router();


// Here we are using destructuring
const { createPost, getAllPosts } = require("../controller/post");
const validateToken = require("../middleware/validate");

// router.get("/", userController.getAllUsers)

router.get("/", getAllPosts);

router.post("/create", validateToken, createPost)


// router.get("/:id", userController.getUserById)

// router.put("/:id", userController.updateUser)

// router.delete(":/id", userController.deletUser);

module.exports = router;