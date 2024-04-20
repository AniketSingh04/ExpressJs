const express = require("express");
const app = express();
const path = require("path");



app.get("/", (req,res)=>{
    // console.log("Server on ExpressJs");
    // res.send("<h1> Hello World</h1>");
    res.status(404).send("Something not found");
});

app.get("/contact", (req,res)=>{
    // console.log("Server on ExpressJs");
    res.send("<h1>Contact</h1>");
});

app.get("/file", (req, res) =>{
    // console.log("Server on ExpressJs");
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/jsonfile", (req, res) =>{
    // console.log("Server on ExpressJs");
    res.json([{
        firstname : "Critiano",
        lastname : "Ronaldo"
    },
    {
        firstname: "Lionel",
        lastname: "Messi"
    },
    {
        firstname: "Fede",
        lastname: "Valverde"
    }])
});

//all handles all request -get, post, delete, update
//for rest of the process, server will send Not found to client as response
// app.all("*", (req,res)=>{}
//     res.send("Not Found");
// });



app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
})