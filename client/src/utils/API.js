// API KEY AIzaSyDDQAq29aepI77u8zTOZLkZIq0BCAHWTl0

// https://www.googleapis.com/books/v1/volumes?q=hemingway you can anything after the query, but you can narrow down with keywords like inauthor
import axios from 'axios';

const API_KEY = 'AIzaSyDDQAq29aepI77u8zTOZLkZIq0BCAHWTl0';

export default {
    apiTest: function () {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${API_KEY}`);
    }
};