const express = require("express");
const app = express();
const phone = require("./data");

app.get("/", (req, res)=>{
    res.send('<h1>Home</h1> <a href="/api/phone">Phones</a>'); //link created to visit the json file
})

//redirects to the json file
app.get("/api/phone", (req, res)=>{
    const newItems = phone.map((item)=>{ //mapping selected data
        const {id,name,image} = item;
        return {id, name, image};   
    })
    res.json(newItems); //shwowing selected data; products
    //res.json(phone); //shwoing all data; {products}
})


app.listen(3000, ()=>{
    console.log("Server Is running on Port 3000");
})