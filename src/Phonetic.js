import React from "react";
import { FaFileAudio } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col-sm-3">
          <IconContext.Provider
            value={{
              style: {
                fontSize: "30px",
                color: "#43597f",
              },
            }}
          >
            <div className="audio">
              <a href={props.phonetic.audio} target="_self">
                <FaFileAudio />
              </a>
            </div>
          </IconContext.Provider>
        </div>
        <div className="col-sm-9">
          <span className="text">{props.phonetic.text}</span>
        </div>
      </div>
    </div>
  );
}
