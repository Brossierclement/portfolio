import "../home/home.scss";
import Header from "../../components/header/header";
import { useContext } from "react";
import { DataContext } from "../../../App";
function Home() {
  const data = useContext(DataContext);
  // console.log(data[0]);
  return (
    <>
      <Header />
      <main className="home">
        <section className="work">
          <h1>Projects</h1>
          {/* <div id="projects" className="projects">
            {data[0] ? (
              data[0].projects.map((item) => (
                <Link
                  className="project"
                  key={item.id}
                  to={`/project/${item.id}`}
                >
                  <img src={item.banner} alt="" />
                  <section className="titled">
                    <h3>{item.name}</h3>
                    <p>{item.titled}</p>
                  </section>
                </Link>
              ))
            ) : (
              <p>Error...</p>
            )}
          </div> */}
        </section>
      </main>
    </>
  );
}
export default Home;
