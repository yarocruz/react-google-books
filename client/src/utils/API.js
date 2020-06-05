// API KEY AIzaSyDDQAq29aepI77u8zTOZLkZIq0BCAHWTl0

// https://www.googleapis.com/books/v1/volumes?q=hemingway you can anything after the query, but you can narrow down with keywords like inauthor
import axios from 'axios';

const KEY = 'AIzaSyDDQAq29aepI77u8zTOZLkZIq0BCAHWTl0';

export default {
    findBooks: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${KEY}`);
    },
    getBooks: function() {
        return axios.get('/api/books');
    },
    saveBook: function (bookInfo) {
        return axios.post(`/${bookInfo.id}`,
            {
                title: bookInfo.volumeInfo.title,
                authors: bookInfo.volumeInfo.authors,
                description: bookInfo.volumeInfo.description,
                image: bookInfo.volumeInfo.imageLinks.thumbnail,
                link: bookInfo.volumeInfo.infoLink
            });
    },
    deleteBook: function (bookInfo) {
        return axios.delete(`/${bookInfo._id}`)
    }
};