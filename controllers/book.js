/**
 * Created by hass on 1/29/2017.
 */
/**
 * GET
 * LIst all books
 **/
const googlebooks= require('google-books-search');
googlebooks.search('Professional', function(error, results, apiResponse) {
    if ( ! error ) {
        console.log(results);


    } else {
        console.log(error);
    }
});

const Book = require('../models/Book.js');

exports.getBooks = (req , res) => {
    Book.find((ern, docs) => {
        res.render('books', {books: docs});

    });
};