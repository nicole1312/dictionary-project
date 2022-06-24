import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="p-2 ">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>{props.meaning.definitions[0].definition}</p>

        <em>{props.meaning.definitions[0].example}</em>
      </div>
    </div>
  );
}
