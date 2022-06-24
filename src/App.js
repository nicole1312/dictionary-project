import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <div className="container logo-image">
        <img src={logo} className="image-fluid app-logo" alt="logo" />
      </div>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}

export default App;
