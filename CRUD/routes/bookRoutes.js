const express = require("express");

const bookController = require('../controllers/bookContrller.js');

const router = express.Router();

//creating routers to handle load
router.get('/books', bookController.getBooks);
router.post('/books',  bookController.postBooks);
router.put('/books/:id',bookController.putBooks);
router.delete('/books/:id',bookController.deleteBooks);

module.exports = router;
