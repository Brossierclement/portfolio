import "../project/project.scss";
import { DataContext } from "../../../App";
import { useContext } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/header";
import Error from "../error/error";

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
          <Header background={result.banner} />
          <main className="project">
            <div className="examples">
              {data ? (
                result.examples.map((item, i) => (
                  <img key={i} src={item} alt={`img ${i}`} />
                ))
              ) : (
                <p>Chargement...</p>
              )}
            </div>
          </main>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
}

export default Project;
