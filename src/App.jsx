import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Perkenalan from "./components/Perkenalan";
import Skill from "./components/Skill";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Perkenalan></Perkenalan>
        <Skill></Skill>
      </main>
      <footer id="contact">ini contact</footer>
    </>
  );
}

export default App;
