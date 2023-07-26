import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [active, setActive] = useState(false);

  const setActiveSlideShow = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <main>
        <section id="perkenalan">perkenalan</section>
        <section id="skill">skill</section>
      </main>
      <footer id="contact">ini contact</footer>
    </>
  );
}

export default App;
