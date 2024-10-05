const express = require("express");
const router = express.Router(); //constructor function
const Books = require("../models/book");

//Get all the books api - GET
router.get("/", async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Add a new book - POST
router.post("/", async (req, res) => {
  const book = new Books({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Search the books:
router.get("/search", async (req, res) => {
  try {
    const { title } = req.query;
    /* const regex = new RegExp(title, 'i'); */
    const books = await Books.find({ title: newReg(title,"i") });
    if (!books) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Export the router
module.exports = router;