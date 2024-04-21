const express = require("express");
const app = express();
const bookRoutes = require("../routes/bookRoutes.js");
app.use(express.json());

app.use("/", bookRoutes);

app.listen(3000, ()=>{
    console.log("Server is listening on Port 3000");
})