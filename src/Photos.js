import React from "react";

import "./Result.css";

export default function Photos(props) {
  if (props.photos) {
    
    return (
      <div className="Definition text-center">
        <div className="row">
          {props.photos.map(function(photo, index) {
            let photoSrc = photo.src.landscape;
            let photoAlt = photo.alt;
            let photoUrl = photo.url;
            return (
              <div className="col-4">
                <a href={photoUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    className="result-img img-fluid"
                    src={photoSrc}
                    alt={photoAlt}
                    key={index}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
