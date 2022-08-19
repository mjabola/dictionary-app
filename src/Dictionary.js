import React, { useState } from "react";

import "./App.css";

export default function Dictionary () {
    const [keyword, setKeyword] = useState("");

    function searchKeyword(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function changeKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
      <div className="Dictionary">
        <div className="search-form container">
          <form onSubmit={searchKeyword}>
            <input
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