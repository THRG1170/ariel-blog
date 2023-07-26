import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const eventScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", eventScroll);

  const setActiveSlideShow = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <nav className={scrolled ? "active" : ""}>
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
            <i class={active ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
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
  );
}

export default Navbar;
