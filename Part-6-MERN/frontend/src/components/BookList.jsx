/* eslint-disable react/prop-types */


const BookList = ({books}) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book)=>(
          <li key={book._id}>{book.title} by {book.author} {book.year}</li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
