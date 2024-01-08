import "../project/project.scss";
import { DataContext } from "../../../App";
import { useContext } from "react";
import { useParams } from "react-router";
import Error from "../error/error";

function Project() {
  const data = useContext(DataContext);
  const { id } = useParams();
  let result;

  if (!data) {
    return <p>Chargement...</p>;
  } else {
    const project = data;
    result = project.find((item) => item.id == id);
    if (!result) {
      return <Error />;
    }
  }

  return (
    <div>
      {data ? (
        <div className="project">{result.name}</div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default Project;
