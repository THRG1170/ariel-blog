import "./Skill.css";

function App() {
  return (
    <>
      <section id="skill">
        <div className="heading">
          <h1>My Skills</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            veritatis repudiandae maiores beatae, consectetur recusandae, labore
            mollitia rerum ad non nam dolore repellendus pariatur! Incidunt
            reprehenderit culpa sequi facere suscipit!
          </p>
        </div>
        <div className="skills">
          <div className="publicspeaking">
            <img src="dutaariel.jpg" alt="dutaariel" className="dutaariel" />
          </div>
          <div className="menggambar">
            <img src="arielgambar.jpeg" alt="gambar" className="gambarariel" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
