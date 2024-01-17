import "../home/home.scss";
import Header from "../../components/header/header";
import { useContext } from "react";
import { DataContext } from "../../../App";
function Home() {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <>
      <Header />
      <main className="home">
        <section className="work">
          {/* <div className="projects">
            {data[0] ? (
              data[0].projects.map((item) => (
                <article key={item.id} className="project">
                  <section className="p-top">
                    <h3>{item.name}</h3>
                    <i className="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                  </section>
                  <p>{item.titled}</p>
                </article>
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
