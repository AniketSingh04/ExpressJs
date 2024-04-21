const express = require("express");
const app = express();
const path = require("path");

//This approach is useful for serving static files like HTML, CSS, JavaScript, images, etc., using Express.js.
app.use(express.static("Express_Static/example"));

//normally external links like that of css and images cant be sent to the client via this so we use express static(check above)
// app.get('/',(req, res)=>{
//     res.sendFile(path.join(__dirname, "example", "index.html"));
// })



app.listen(3000, ()=>{
    console.log("Server is listening on Port 3000");
});