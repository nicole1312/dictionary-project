import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container app-container">
        <h1>Dictionary</h1>
        <main>
          <Dictionary searchedWord="sunshine" />
        </main>
      </div>

      <footer>
        <a
          href="https://github.com/nicole1312/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
          className="source-code-link"
        >
          Open-souce-code
        </a>
        by Nicoleta Serban
      </footer>
    </div>
  );
}

export default App;
