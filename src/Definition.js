import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

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
                {definition.definition}
                <Example example={definition.example} />
                <Synonyms synonyms={definition.synonyms} />
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
