import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span>{props.phonetic.text}</span>{" "}
      <a href={props.phonetic.audio}>Listen</a>
    </div>
  );
}
