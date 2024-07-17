const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
    .connect("mongodb://localhost:27017/Node-API")
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
        
    })
    .catch(() => {
        console.log("Connection failed");
    });

app.get("/", (req, res) => {
    res.send("Hello from Node API");
});

