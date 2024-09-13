import './App.css';
import { useEffect, useState } from 'react';
import { getAllBooks, addBook, editBook, deleteBook } from './FetchBooks';
import { MyBooks } from './MyBooks';

function App() {

  const [myBooks, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [editing, setEditing] = useState(false);
  const [bookId, setBookId] = useState("")
    
  useEffect(() => {
    getAllBooks(setBooks)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setBookId(_id)
  }

  return (
    <div className="container">
        <h1>SUMMER READING LIST</h1>
    <div>
        <input
        type="text"
        placeholder = "Add a book"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        
        <button
        disabled={!title} 
        onClick=
        {editing ? () => editBook(bookId, title, setTitle, setBooks, setEditing) : () => addBook(title, setTitle, setBooks)}>
        {editing ? "Edit" : "Add"}
        </button>
    </div> 
    <div className='list'>
        {myBooks.map((book) => 
        <MyBooks
        text={book.title} key = {book._id}
        updatingInInput={() => updatingInInput(book._id, book.title)}
        deleteBook={() => deleteBook(book._id, setBooks)}/>
      )}
    </div>
    </div>
  );
}

export default App;
