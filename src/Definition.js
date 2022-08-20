import React from "react";

import "./Result.css";

export default function Definition(props) {
    console.log(props.meaning);
    return (
      <div className="Definition">
        <p>{props.result.phonetics[0]}</p>
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function(definition, index) {
          if (index < 5) {
            return (
              <div className="result-container">
                <div key={index}>
                  <p>{definition.definition}</p>
                  <p className="example">{definition.example}</p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
}