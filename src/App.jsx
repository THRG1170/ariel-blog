import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
      <header>
        <nav>
          <ul>
            <li className="ariel">
              <h3>ARIEL HUTOMO</h3>
            </li>
            <li className="navigation">
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
            <li className="tri">
              <button className="slideBoxBtn" onClick={setActiveSlideShow}>
                <i class="fa-solid fa-bars"></i>
              </button>
            </li>
          </ul>
          <div
            className={
              active ? "slideBoxActive slideBox" : "slideBoxNotActive slideBox"
            }
          >
            <ul>
              <li>
                <a href="#perkenalan" onClick={() => setActive(false)}>
                  Perkenalan
                </a>
              </li>
              <li>
                <a href="#skill" onClick={() => setActive(false)}>
                  Skill
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setActive(false)}>
                  Hubungi
                </a>
              </li>
            </ul>
          </div>
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
