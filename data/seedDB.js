const mongoose = require('mongoose');
const Book = require('../schemas/book');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/savedbooks');

const mockData = [
    {
        title: 'Book 1',
        authors: ['John Doe', 'Susy Doe'],
        description: 'This book is great',
        image: 'https://source.unsplash.com/random',
        link: 'https://source.unsplash.com/random'
    }
]

Book
    .remove({})
    .then(() => Book.collection.insertMany(mockData))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });