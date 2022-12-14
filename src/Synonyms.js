import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
          <div className="synonym">
            {props.synonyms.map(function(synonym, index) {
              return (
                <ul key={index}>
                  <li>{synonym}</li>
                </ul>
              );
            })}
          </div>
        );
    } else {
        return null;
    }
}
