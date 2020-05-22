import React, { useState, useEffect } from "react";
import API from './utils/API';

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBook();
    }, [])

    function loadBook() {
        API.apiTest()
            .then(response => {
                console.log(response.data.items[0].volumeInfo.title)
                setBooks(response.data.items)
            })
            .catch(err => console.log(err));
    }
    console.log(books)
    return (
      <div>
        <h1>Hello from React!</h1>
          {books.length && books[0].volumeInfo.title} {/*Checks if the books array has data.*/}
      </div>
    );
}

export default App;
