const mongoose = require('mongoose');
const Schema = mongoose.Schema;

bookSchema = new Schema({
    title: {
        type: String,
    },
    authors: {
        type: Array,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;