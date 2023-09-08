import "bootstrap/dist/css/bootstrap.css";
import logo from "./netflix_logo.png";
import "./App.css";
import NavBar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <NavBar logo={logo} />
      <HeaderSection />
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
