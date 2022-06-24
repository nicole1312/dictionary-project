import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(" ");

  function search(event) {
    event.preventDefault();
    alert(`Searching for "${word}" definition...`);
  }

  function handleWordSubmit(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search a word..."
          autoFocus="off"
          className="form-search"
          onChange={handleWordSubmit}
        />
      </form>
    </div>
  );
}
