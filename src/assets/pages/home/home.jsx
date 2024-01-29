import "../home/home.scss";
import Header from "../../components/header/header";
import { useContext } from "react";
import { DataContext } from "../../../App";
import { Link } from "react-router-dom";
import silhouette from "../../../../public/images/me.png";
import Btn from "../../components/btn/btn";
import Footer from "../../components/footer/footer";

function Home() {
  const data = useContext(DataContext);
  return (
    <>
      <Header title={"Clément Brossier"} titled={"Développeur front-end"} />
      <main className="home">
        <h1 className="home-title">Compétences.</h1>
        <div className="proficiencies">
          {data.proficiencies.map((item, i) => (
            <div key={i} className="proficiency">
              <h2>{item.title}</h2>
              <ul>
                {data.proficiencies[i].content.map((item) => (
                  <li key={item.id}>
                    <img src={item.logo} alt="" />
                    <p className="tech">{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h1 id="projets" className="home-title">
          Projets.
        </h1>
        <div className="projects">
          {data.projects.map((item) => (
            <Link
              to={`/project/${item.id}`}
              key={item.id}
              className="project-card"
            >
              <img src={item.logo} alt="" />
              <div className="titled">
                <h3>{item.title}</h3>
                <p>{item.titled}</p>
              </div>
            </Link>
          ))}
        </div>
        <h1 id="about" className="home-title">
          À propos.
        </h1>
        <div className="about">
          <p className="lore">
            Je suis un jeune développeur Français spécialisé dans le front-end.
            J'ai acquéri des compétences en <span>JavaScript</span> et{" "}
            <span>React</span> durant la formation que j'ai fait à{" "}
            <a href="https://openclassrooms.com/fr" target="blank">
              OpenClassrooms.
            </a>
            <br />
            Je consacre régulièrement du temps a la maîtrise de ces deux
            langages, a coté de cela j'aime jouer aux jeux vidéo et apprendre
            comment fonctionne Figma.
          </p>
          <div className="more">
            <section className="degree">
              <h3>Dîplomes :</h3>
              <p>Intégrateur Web / Bac+2 / 2023</p>
            </section>
            <Btn
              name={"Curriculum vitae"}
              url={"/images/cv clement brossier.pdf"}
            />
          </div>
          <img src={silhouette} alt="" className="silhouette" />
        </div>
        <h1 id="contact" className="home-title">
          Contact.
        </h1>
        <div className="contact">
          <p>Bientôt...</p>
          <p className="email">
            En attendant vous pouvez me contacter via mon email :{" "}
            <a href="mailto: brossier.clement@proton.me">
              brossier.clement@proton.me
            </a>
          </p>
        </div>
      </main>
      <Footer data={data.networks} />
    </>
  );
}
export default Home;
