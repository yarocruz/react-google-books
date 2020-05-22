import React, { useState, useEffect } from "react";
import {TextField} from "@material-ui/core";
import API from './utils/API';

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBook();
    }, [])

    function loadBook() {
        API.apiTest()
            .then(response => {
                console.log(response.data.items[0].volumeInfo.title);
                setBooks(response.data.items);
            })
            .catch(err => console.log(err));
    }
    console.log(books);
    return (
      <div style={{maxWidth: '1000px', margin: '0 auto'}}>
        <h1>React Google Book Search</h1>
          <p>Search for a book.</p>
          {books.length && books[0].volumeInfo.title} {/*Checks if the books array has data.*/} <br />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    );
}

export default App;
