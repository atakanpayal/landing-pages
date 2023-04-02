import "./App.css";
import Mainpage from "./components/Mainpage";
import NavbarExe from "./components/Navbar";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Top />
      <NavbarExe />
      <Mainpage />
    </div>
  );
}

export default App;
