const Post = require("../model/post");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

const createPost = async (request, response) => {
    const data = request.body;

    // The ? mark checks for optional (NOW WE DON"T NEED THIS BECAUSE THIS IS ALREADY DONE IN VALIDATETOKEN MIDDLEWARE)
    // const token = request.headers?.authorization.split(" ")[1];

    if (request.decodedEmail) {        
        // const decodedValue = jwt.decode(token, { complete : true} );

        const findUser = await  User.findOne({ email: request.decodedEmail});

        if (findUser) {
            const newPost = new Post({
                title: data.title,
                subTitle: data.subTitle,
                description: data.description,
                user: findUser._id
            })

          try {
            const output = await newPost.save();
            return response.status(201).json({
                message: "Post Succesfully Created",
                data: output
            })
          }  catch (error) {
                return response.status(500).json({
                    message: "There was an error",
                    error
                })
            }
        } else {
            return response.status(404).json({
                message: "User was not Found!"
            })
        }
        
    } else {
        return response.status(401).json({
            message: "Token required!",
        })
    }


}

const getAllPosts = async (request, response) => {
    try {
        const data = await Post.find().populate({
            path: "user"
        });

        return response.status(200).json({
            message: "Posts found Succesfully",
            data
        })
    } catch (error) {
        return response.status(500).json({
            message: "There was an error",
            error
        })
    }
}


module.exports = {
    createPost,
    getAllPosts
}