import "../home/home.scss";
import Header from "../../components/header/header";
import { useContext } from "react";
import { DataContext } from "../../../App";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

function Home() {
  const data = useContext(DataContext);
  // console.log(data.proficiencies[0].content);
  return (
    <>
      <Header />
      <main className="home">
        <h1 className="home-title">Proficiency</h1>
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
        <h1 className="home-title">Projects</h1>
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
      </main>
      <Footer data={data.networks} />
    </>
  );
}
export default Home;
