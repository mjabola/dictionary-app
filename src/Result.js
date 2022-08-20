import React from "react";

import "./Result.css"

export default function Result(props) {
if (props.result) {
    return <div className="result-display">
            <h2>{props.result.word}</h2>
        </div>;
} else {
    return null;
}
}