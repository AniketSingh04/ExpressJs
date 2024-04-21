const express = require("express");
const app = express();
app.use(express.json());

//In-memory book collection
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
    console.log(req.body); // Log the request body to the console
    const newBook = req.body; // Extract the new book details from the request body
    newBook.id = books.length + 1; // Assign a new ID to the new book
    books.push(newBook); // Add the new book to the "books" array
    res.status(201).json(books); // Respond with the updated "books" array
});

//PUT
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id); // Extract the ID from the request parameters
    const updateBook = req.body; // Extract the updated book details from the request body
    const index = books.findIndex(book => book.id === id); // Find the index of the book with the given ID in the "books" array

    if (index !== -1) { // If the book with the given ID is found in the "books" array
        books[index] = { ...books[index], ...updateBook }; // Update the book details with the new information
        res.json(books[index]); // Respond with the updated book details
    } 
    else { // If the book with the given ID is not found in the "books" array
        res.status(404).json({ error: 'Book not found!!!' }); // Respond with a 404 error indicating that the book was not found
    }
});

//DELETE
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id); // Extract the ID from the request parameters
    const index = books.findIndex(book => book.id === id); // Find the index of the book with the given ID in the "books" array
    
    if (index !== -1) { // If the book with the given ID is found in the "books" array
        const deletedBook = books[index]; // Store the book object to be deleted
        books.splice(index, 1); // Remove the book from the "books" array
        res.json(deletedBook); // Respond with the deleted book details
    }
    else { // If the book with the given ID is not found in the "books" array
        res.status(404).json({ error: "Book not found!!!" }); // Respond with a 404 error indicating that the book was not found
    }
});


app.listen(3000, ()=>{
    console.log("Server is listening on Port 3000");
})