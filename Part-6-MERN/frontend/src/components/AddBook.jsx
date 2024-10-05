/* eslint-disable react/prop-types */
import { useState } from "react";


const AddBook = ({addBooks}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor]=useState('')
  const [year, setYear]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(title && author && year){
      addBooks({title,author,year:Number(year)})
      setTitle('')
      setAuthor('')
      setYear('')
    }
  }
  return (
    <div>
      <h2>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        <br/>
        <label>Author:</label>
        <input type="text" placeholder="Author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
        <br/>
        <label>Year:</label>
        <input type="number" placeholder="Year" value={year} onChange={(e)=>setYear(e.target.value)} required/>
        <br/>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
