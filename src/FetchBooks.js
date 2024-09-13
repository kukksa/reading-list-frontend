import axios from "axios";

const myURL = "https://summer-reading-list.onrender.com"

const getAllBooks = (setBooks) => {
    axios.get(`${myURL}`)
    .then(({data}) => {
    setBooks(data)
    })
}

const addBook = ( title, setTitle, setBooks ) => {
    axios.post(`${myURL}/addBook`, {title})
    .then(() => {
        setTitle("")
        getAllBooks(setBooks)        
    })
}

const editBook = (bookId, title, setTitle, setBooks, setEditing) => {
    axios.put(`${myURL}/editBook`, {_id: bookId, title})
    .then(() => {
        setTitle("")
        setEditing(false)
        getAllBooks(setBooks)
})
}

const deleteBook = (_id, setBooks) => {
    axios.post(`${myURL}/deleteBook`, { _id })
    .then(() => {
        getAllBooks(setBooks)
        
    })
}

export { getAllBooks, addBook, editBook, deleteBook };
