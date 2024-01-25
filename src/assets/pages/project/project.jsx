import "../project/project.scss";
import { useContext } from "react";
import { DataContext } from "../../../App";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router";
function Project() {
  const data = useContext(DataContext);
  const { id } = useParams();
  const currentData = data.projects.find((currentData) => currentData.id == id);
  return (
    <>
      <Header />
      <main className="project">
        <h1>Project : {currentData.title}</h1>
      </main>
      <Footer data={data.networks} />
    </>
  );
}
export default Project;
