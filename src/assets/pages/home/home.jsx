import "./home.scss";
import { useState, useEffect } from "react";
import Header from "../../components/header/header";
import eye from "../../images/eye-solid.svg";
import bg from "../../images/melancholy.jpg";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Header logo={eye} background={bg} />
      <main className="main">
        <section className="introduce">
          <h1>Clément Brossier</h1>
          <p className="quote">
            Coding with simplicity, crafting digital magic.
          </p>
          <p className="activities">Web Integrator Junior - Content Creator</p>
        </section>
        <nav className="navigation"></nav>
        <section className="about">
          <h1># About</h1>
          <p>
            "I am a young French web developer specializing in front-end
            development. I acquired skills in <span>JavaScript</span> and{" "}
            <span>React</span> during my training at{" "}
            <a href="">OpenClassrooms</a>, and i dedicate daily practice to
            mastering these languages. Beyond coding, i enjoy playing video
            games and expanding my knowledge of design tools like Figma."
          </p>
        </section>
        <section className="projects">
          <h1># Projects</h1>
          {data
            ? data.map((item) => (
                <Link key={item.id} to={item.url}>
                  {item.name}
                </Link>
              ))
            : "Chargement"}
        </section>
      </main>
    </>
  );
}

export default Home;
