import React from "react";
import { FaPlay } from "react-icons/fa";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  const start = () => {
    audio.play();
  };
  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col-sm-3">
          <button onClick={start} className="btn btn-light audio">
            <FaPlay />
          </button>
        </div>
        <div className="col-sm-6">
          <span className="text">{props.phonetic.text}</span>
        </div>
      </div>
    </div>
  );
}
