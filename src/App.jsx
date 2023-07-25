import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="ariel">
              <h3>ARIEL HUTOMO</h3>
            </li>
            <li>
              <ul>
                <li>
                  <a href="#perkenalan">Perkenalan</a>
                </li>
                <li>
                  <a href="#skill">Skill</a>
                </li>
                <li>
                  <a href="#contact">Hubungi</a>
                </li>
              </ul>
            </li>
            <li className="tri">@tri</li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="perkenalan">perkenalan</section>
        <section id="skill">skill</section>
      </main>
      <footer id="contact">ini contact</footer>
    </>
  );
}

export default App;
