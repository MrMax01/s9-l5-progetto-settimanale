import "bootstrap/dist/css/bootstrap.css";
import logo from "./netflix_logo.png";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar logo={logo} />
    </div>
  );
}

export default App;
