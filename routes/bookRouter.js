const express = require('express');
const { getAllBooks, getBookById} = require('../controller/bookControler');

const router = express.Router();


router.get("/",getAllBooks);

router.get("/:bookId",getBookById)


module.exports = router