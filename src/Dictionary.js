import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";

import "./App.css";

export default function Dictionary () {
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState(null);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

    function searchKeyword(event) {
        event.preventDefault();

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
            <input
              className="search-box"
              type="search"
              placeholder="Enter a word..."
              onChange={changeKeyword}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <Result result={result} />
      </div>
    );
}