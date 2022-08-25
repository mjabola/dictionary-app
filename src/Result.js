import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";

import "./Result.css"

export default function Result(props) {
if (props.result) {
    return (
      <div className="result-display">
        <h2>{props.result.word}</h2>
        {props.result.phonetics.map(function(phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
              </div>
          );
        })}

        {props.result.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <Definition meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
} else {
    return null;
}
}