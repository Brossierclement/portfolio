import "../project/project.scss";

function Project({ data }) {
  return (
    <div className="project">
      <h1>{data.name}</h1>
    </div>
  );
}

export default Project;
