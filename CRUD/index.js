const express = require("express");
const app = express();

app.use(express.static("CRUD"));
app.use(express.urlencoded({extended:false})); //to get data from form

let books = [
    { id:1, title: "Book1", author:"Author1"},
    { id:2, title:"Book2", author:"Author2"},
]

//GET
app.get("/books", (req,res)=>{
    res.json(books);
})

//POST
app.post("/books", (req, res) => {
    console.log(req.body);
    const newBook = {
        id: books.length + 1, // Incremental ID for the new book
        title: req.body.title, // Extracting title from the request body
        author: req.body.author // Extracting author from the request body
    };
    books.push(newBook); // Add the new book to the books array
    res.status(201).json(newBook); // Respond with status 201 (Created) and the newly created book
});


app.listen(3000, ()=>{
    console.log("Server is listening on Port 3000");
})