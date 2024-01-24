import "../home/home.scss";
import Header from "../../components/header/header";
import { useContext } from "react";
import { DataContext } from "../../../App";
import { Link } from "react-router-dom";
import silhouette from "../../../../public/images/me.png";
import terminal from "../../../../public/images/terminal.jpg";
import Footer from "../../components/footer/footer";

function Home() {
  const data = useContext(DataContext);
  // console.log(data.proficiencies[0].content);
  return (
    <>
      <Header />
      <main className="home">
        <h1 className="home-title">Proficiency.</h1>
        <div className="proficiencies">
          {data.proficiencies.map((item, i) => (
            <div key={i} className="proficiency">
              <h2>{item.title}</h2>
              <ul>
                {data.proficiencies[i].content.map((item) => (
                  <li key={item.id}>
                    <img src={item.logo} alt="" />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h1 id="projects" className="home-title">
          Projects.
        </h1>
        <div className="projects">
          {data.projects.map((item) => (
            <Link key={item.id} className="project">
              <img src={item.logo} alt="" />
              <div className="titled">
                <h3>{item.title}</h3>
                <p>{item.titled}</p>
              </div>
            </Link>
          ))}
        </div>
        <h1 id="about" className="home-title">
          About.
        </h1>
        <div className="about">
          <p className="lore">
            I am a young French web developer specializing in front-end
            development. I acquired skills in <span>JavaScript</span> and{" "}
            <span>React</span> during my training at{" "}
            <a href="https://openclassrooms.com/fr" target="blank">
              OpenClassrooms
            </a>
            , and i dedicate daily practice to mastering these languages.
            Besides coding, i enjoy playing video games and expanding my
            knowledge of design tools like Figma.
          </p>
          <div className="more">
            <section className="degree">
              <h3>Degree :</h3>
              <p>Web Integrator Developer / Bac+2 / 2023</p>
            </section>
            <section className="resume">
              <button className="btn-resume left">Curriculum vitae</button>
            </section>
          </div>
          <img src={silhouette} alt="" className="silhouette" />
        </div>
        <h1 id="contact" className="home-title">
          Contact.
        </h1>
        <div className="contact">
          <p>Soon...</p>
        </div>
      </main>
      <Footer data={data.networks} />
    </>
  );
}
export default Home;
