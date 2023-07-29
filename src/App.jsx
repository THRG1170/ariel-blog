import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Perkenalan from "./components/Perkenalan";
import Skill from "./components/Skill";
import Hubungi from "./components/Hubungi";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Perkenalan></Perkenalan>
        <Skill></Skill>
      </main>
      <Hubungi></Hubungi>
    </>
  );
}

export default App;
