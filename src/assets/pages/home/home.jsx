import "./home.scss";
import { Link, Routes, Route } from "react-router-dom";
import Header from "../../components/header/header";
import eye from "../../images/eye-solid.svg";
import bg from "../../images/melancholy.jpg";
import About from "../about/about";
import Project from "../project/project";
import Contact from "../contact/contact";

function Home() {
  return (
    <>
      <Header logo={eye} background={bg} />
      <main className="main">
        <section className="introduce">
          <h1>Clément Brossier</h1>
          <p>Coding with simplicity, crafting digital magic.</p>
          <p>Web Integrator Junior - Content Creator</p>
        </section>
        <nav>
          <Link to={"/about"}>About</Link>
          <Link to={"/project"}>Project</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default Home;
