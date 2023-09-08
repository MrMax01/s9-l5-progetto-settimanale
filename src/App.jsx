import "bootstrap/dist/css/bootstrap.css";
import logo from "./netflix_logo.png";
import "./App.css";
import NavBar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import FilmList from "./components/FilmList";

function App() {
  return (
    <div className="App bg-dark">
      <NavBar logo={logo} />
      <HeaderSection />
      <FilmList typeList="trendig now" films="batman" />
    </div>
  );
}

export default App;
