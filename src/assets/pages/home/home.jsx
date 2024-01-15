import "./home.scss";
import { useContext } from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import bg from "../../images/melancholy.jpg";
import arrow from "../../images/arrow-right-outline.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import { DataContext } from "../../../App";
import Button from "../../components/button/button";
import Skill from "../../components/skill/skill";

function Home() {
  const data = useContext(DataContext);
  return (
    <>
      <Header />
      <Banner img={bg} />
      <main className="main">
        <section className="introduce">
          <h1>Clément Brossier</h1>
          <p className="quote">
            Coding with simplicity, crafting digital magic.
          </p>
          <p className="activities">Web Integrator Junior - Content Creator</p>
          <div className="more">
            <Button
              name={"curriculum vitae"}
              link={"/img/cv-clement-brossier.pdf"}
            />
          </div>
        </section>
        <section className="about">
          <h1># About</h1>
          <p>
            I am a young French web developer specializing in front-end
            development. I acquired skills in <span>JavaScript</span> and{" "}
            <span>React</span> during my training at{" "}
            <a href="https://openclassrooms.com/fr" target="blank">
              OpenClassrooms
            </a>
            , and i dedicate daily practice to mastering these languages. Beyond
            coding, i enjoy playing video games and expanding my knowledge of
            design tools like Figma.
          </p>
        </section>
        <section className="projects">
          <h1># Projects</h1>
          <nav className="links">
            {data
              ? data[0].projects.map((item) => (
                  <Link
                    className="link"
                    key={item.id}
                    to={`/project/${item.id}`}
                  >
                    <p>{item.name}</p>
                    <img className="arrow" src={arrow} alt="arrow" />
                  </Link>
                ))
              : "Chargement"}
          </nav>
        </section>
        <section className="skills">
          <h1># Skills</h1>
          {data ? (
            data[1].skills.map((item) => <Skill key={item.id} data={item} />)
          ) : (
            <p>Chargement...</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
