/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import FilterBooks from "./components/FilterBooks";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  /* const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); */

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("https://localhost:5000/books");
      setBooks(response.data);
      /* setFilteredBooks(response.data); */
    } catch (err) {
      console.log("Error fetching Books:",err);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post("https://localhost:5000/books", book);
      setBooks([...books, response.data]);
      /* setFilteredBooks([...filteredBooks, response.data]); */
    } catch (err) {
      console.log("Error adding books:",err);
    }
  };

  const filterBooks = async (title) => {
      if (title === "") {
        setBooks(books);
      } else {
        const filtered = books.filter((book) =>
          book.title.toLowerCase().includes(title.toLowerCase()));
        setBooks(filtered);
      }
    }
    /* catch (err) {
      console.log(err);
    } */

  return (
    <>
      <div className="App">
        <h1>Book List App</h1>
        <AddBook addBook={addBook} /> {/* function passing as a prop */}
        <FilterBooks filterBooks={filterBooks} /> {/* function passing as a prop */}
        <BookList books={books} /> {/* state passing as a prop */}
      </div>
    </>
  );
};

export default App;

/*
"axios" also have HTTPS methods in it.
*/