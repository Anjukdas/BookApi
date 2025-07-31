const router = require("../routes/bookRouter");

//Book array
const books = [
    { id: 1, title: 'Randamoozham', author: 'M. T. Vasudevan Nair', year: 1984 },
    { id: 2, title: 'Khasakkinte Itihasam', author: 'O. V. Vijayan', year: 1969 },
    { id: 3, title: 'Chemmeen', author: 'Thakazhi Sivasankara Pillai', year: 1956 }
];

// GET /books
const getAllBooks = (req, res) => {
    res.json(books);
};

//Get book by Id
const getBookById = (req,res)=>{
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);

    if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}



module.exports = {
    getAllBooks,
    getBookById
}