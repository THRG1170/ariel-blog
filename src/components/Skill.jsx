import "./Skill.css";

function App() {
  return (
    <>
      <div className="waves up">
        <img src="wave (7).svg" alt="" />
        <img src="wave (3).svg" alt="" />
      </div>
      <section id="skill">
        <div className="heading">
          <h1>My Skills</h1>
          <p>
            Saya mempunyai beberapa skill dan bakat, Berikut ini skill - skill
            yang saya punyai
          </p>
        </div>
        <div className="skills">
          <div className="publicspeaking">
            <div className="penjelasanskill">
              <p>
                Saya sangat ahli dalam public speaking dan berbicara didepan
                umum
              </p>
            </div>
            <img src="dutaariel.jpg" alt="dutaariel" className="dutaariel" />
          </div>
          <div className="kepemimpinan">
            <img
              src="kepemimpinan (2).jpg"
              alt="dutaariel"
              className="dutaariel"
            />
            <div className="penjelasanskill">
              <p>
                Saya mempunyai jiwa kepemimpinan, saya bisa anggota2 saya dan
                staff2 saya, dan saya pernah menjadi ketua osis di SMPN 15 KOTA
                PALU
              </p>
            </div>
          </div>
          <div className="pengalaman">
            <img
              src="pengalaman-organisasi.jpg"
              alt="dutaariel"
              className="dutaariel"
            />
            <div className="penjelasanskill">
              <p>
                Saya sering masuk organisasi2 sekolah saya seperti OSIS, KIR,
                DLL.
              </p>
            </div>
          </div>
          <div className="menggambar">
            <img src="arielgambar.jpeg" alt="gambar" className="gambarariel" />
            <div className="penjelasanskill">
              <p>
                Hobiku adalah menggambar dan saya sering menggambar karakter2
                anime DLL
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="waves down">
        <img src="wave (6).svg" alt="" />
        <img src="wave (2).svg" alt="" />
      </div>
    </>
  );
}

export default App;
