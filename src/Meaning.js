import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section>
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              {definition.definition}
              <br />
              <small className="example">{definition.example}</small>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
