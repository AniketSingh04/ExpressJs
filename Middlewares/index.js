const express = require("express");
const morgan = require("morgan");
const app = express();

//Third-Party Middleware
const logger = require("morgan");

app.use(morgan('dev')); // Use Morgan middleware for logging HTTP requests


// Define a custom middleware function
//every incoming request will pass through the custom middleware
// const logger = (req, res, next) =>{
//     console.log(`${new Date()},Request[ ${req.method}, [${req.url}]]`);
//     next(); //pass the control to the next middleware
// }
// const authorize = (req,res, next)=>{
//     console.log(`I am Auth`);
// }

// // Use the logger middleware for all routes
// //app.use(logger); //mount middleware functions in the application's request processing pipeline
// app.use([logger, authorize]);

app.get("/", (req,res)=>{
    res.send("HOME");
})

app.get("/about", (req,res)=>{
    res.send("About");
})

app.get("/contact", (req,res)=>{
    res.send("Contact");
})



app.listen(3000, ()=>{
    console.log("Server is running on Port 3000");
});

