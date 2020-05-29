import React, { useState, useEffect } from "react";
import API from './utils/API';
import Album from '../src/components/Album';

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
      <div>
          <Album />
      </div>
    );
}

export default App;
