const express = require("express");
const app = express();

// This tells the server to use there own port if they wnat

const PORT = process.env.PORT ||  4000;
const mongoose = require("mongoose");
const userRoutes=  require("./routes/user");
const postRoute = require("./routes/post");

// We are using this so that we can use .env file,. beacuse we want certain data to be confidential
require('dotenv').config();


// Parsing incoming values
app.use(express.json());

// Throught this middleware you can connect to your frontend application
app.use(express.static("public"));



mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.log("There was an error", error);
    } else {
        console.log("Database Succesfully Connected");
    }
})


// We are commenting it out because i want to show frotnend here!
// app.get('/', (request, response) => {
//     return response.send("Endpoints are here!");
// })

// We will use middleware
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})