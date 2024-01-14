import "../project/project.scss";
import { DataContext } from "../../../App";
import { useContext } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/header";
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
              <section className="title">
                <img className="pins" src={result.banner} alt="ddd" />
                <h1>{result.name}</h1>
              </section>
              <div className="about">
                <p># Titled : {result.title}</p>
                <p># Role : {result.goal}</p>
              </div>
            </section>
            <div className="examples">
              {data ? (
                result.examples.map((item, i) => (
                  <img key={i} src={item} alt={`img ${i}`} />
                ))
              ) : (
                <p>Chargement...</p>
              )}
            </div>
            <section className="description">
              <h1>{result.about.titleOne}</h1>
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
