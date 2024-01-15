import "../project/project.scss";
import { DataContext } from "../../../App";
import { useContext } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Error from "../error/error";
import Footer from "../../components/footer/footer";

function Project() {
  const data = useContext(DataContext);
  const { id } = useParams();
  let result;

  if (!data) {
    return <p>Chargement...</p>;
  } else {
    const project = data[0].projects;
    result = project.find((item) => item.id == id);
    if (!result) {
      return <Error />;
    }
  }

  return (
    <>
      {data ? (
        <>
          <Header styles={{ display: "none" }} />
          <main className="project">
            <section className="project-introduce">
              <h1>{result.title}</h1>
            </section>
            <Banner img={result.banner} />
            <section className="description">
              <p>{result.about.realization}</p>
              <h1>{result.about.titleTwo}</h1>
              <ul>
                {data ? (
                  result.about.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))
                ) : (
                  <p>Chargement...</p>
                )}
              </ul>
              <h1>{result.about.titleThree}</h1>
              <div className="tags">
                {data ? (
                  result.about.skills.map((item, i) => (
                    <span className="tag" key={i}>
                      {item}
                    </span>
                  ))
                ) : (
                  <p>Chargement...</p>
                )}
              </div>
            </section>
          </main>
          <Footer />
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
}

export default Project;
