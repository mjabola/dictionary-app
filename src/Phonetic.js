import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.text}{" "}
      <span className="listen">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-volume-high"></i>
      </a>{" "}
      <small>(Opens in a new window)</small></span>
    </div>
  );
}
