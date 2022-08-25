import React from "react";


import "./Result.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function(definition, index) {
        if (index < 5) {
          return (
            <div className="result-container">
              <div key={index}>
                <p>{definition.definition}</p>
                <p className="example">{definition.example}</p>
                <p className="synonym">{definition.synonyms}</p>
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
