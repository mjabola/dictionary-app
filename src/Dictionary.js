import axios from "axios";
import React, { useState } from "react";

import "./App.css";

export default function Dictionary () {
    const [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data);
    }

    function searchKeyword(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function changeKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
      <div className="Dictionary">
        <div className="search-form container">
          <form onSubmit={searchKeyword}>
            <input className="search-box"
              type="search"
              placeholder="Enter a word..."
              onChange={changeKeyword}

            />
              <button type="submit">Search</button>

          </form>
        </div>
      </div>
    );
}