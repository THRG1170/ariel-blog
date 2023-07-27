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
        <section id="perkenalan">
          <div className="perkenalan">
            <h1>Hi saya Ariel Hutomo</h1>
            <small>Murid SMA NEGERI 1 PALU</small>
            <p>
              Nama panjang saya Ariel Hutomo Daeng Malongi. Saya murid SMA
              NEGERI 1 PALU.Saya memiliki minat dalam seni menggambar dan
              keterampilan berbicara di depan umum yang baik (public speaking).
              Selain itu, saya juga memiliki kemampuan dalam hal surat menyurat.
              Saya sangat menikmati proses kreatif dalam menggambar dan merasa
              percaya diri saat berbicara di hadapan audiens. Kemampuan menyusun
              komunikasi tertulis juga menjadi nilai tambah dalam berkomunikasi.
            </p>
          </div>
          <img src="./arielhutomo.png" alt="foto ariel" className="fotoaril" />
        </section>
        <section id="skill">skill</section>
      </main>
      <footer id="contact">ini contact</footer>
    </>
  );
}

export default App;
