import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import Photos from "./Photos";

import "./App.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchKeyword(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = `563492ad6f91700001000001c6af5a4ee04f471e8e380992e77001fd`;
    let bearerToken = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsUrl, { headers: bearerToken }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
