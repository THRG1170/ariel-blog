import "./Perkenalan.css";

function Pekernalan() {
  return (
    <>
      <section id="perkenalan">
        <div className="perkenalan">
          <h1>Hi saya </h1>
          <small>Murid SMA NEGERI 1 PALU</small>
          <p>
            Nama panjang saya <span>Ariel Hutomo Daeng Malongi</span>. Saya
            murid <span>SMA NEGERI 1 PALU</span>. Saya tinggal di Sulawesi
            Tengah, Kota Palu, Jln. Dr. Wahidin. <br />
            Ayo liat sekitar dan mengetahui siapa saya!
          </p>
          <a href="#skill" className="cta">
            Get started
          </a>
        </div>
        <img src="./arielhutomo.png" alt="foto ariel" className="fotoaril" />
        <div class="animateme">
          <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Pekernalan;
