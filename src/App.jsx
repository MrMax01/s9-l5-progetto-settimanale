import "bootstrap/dist/css/bootstrap.css";
import logo from "./netflix_logo.png";
import "./App.css";
import NavBar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import FilmList from "./components/FilmList";

function App() {
  return (
    <div className="App">
      <NavBar logo={logo} />
      <HeaderSection />
      <FilmList films="batman" />
      <FilmList films="lord of rings" />
      <FilmList films="harry potter" />
    </div>
  );
}

export default App;
