import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <div className="logo-image">
        <img src={logo} className="image-fluid app-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
