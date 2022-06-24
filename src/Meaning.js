import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h4>
              <small>{definition.definition}</small>
            </h4>
            <p>{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
