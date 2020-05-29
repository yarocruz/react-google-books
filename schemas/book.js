const mongoose = require('mongoose');
const Schema = mongoose.Schema();

bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const Book = mongoose.model("Book", bookSchema);

module.export = Book;