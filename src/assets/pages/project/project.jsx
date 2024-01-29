import "../project/project.scss";
import { useContext, useState } from "react";
import { DataContext } from "../../../App";
import Header from "../../components/header/header";
import Btn from "../../components/btn/btn";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router";
function Project() {
  const data = useContext(DataContext);
  const { id } = useParams();
  const currentData = data.projects.find((currentData) => currentData.id == id);

  const [imageStates, setImageStates] = useState([]);
  const handleClick = (index) => {
    const newImageStates = [...imageStates]; // Créez une copie de l'état actuel
    newImageStates[index] = !newImageStates[index]; // Inversez l'état de l'image cliquée
    // Si l'image est réactivée, désactivez toutes les autres images
    if (newImageStates[index]) {
      for (let i = 0; i < newImageStates.length; i++) {
        if (i !== index) {
          newImageStates[i] = false;
        }
      }
    }
    setImageStates(newImageStates); // Mettez à jour l'état avec le nouveau tableau
  };
  return (
    <>
      <Header title={currentData.title} titled={currentData.type} />
      <main className="project">
        <h1 className="project-title">Description.</h1>
        <div className="introduction-container">
          <p className="introduction">{currentData.introduction}</p>
          <div className="infos">
            <p>Réalisé le : {currentData.date}</p>
            <p>Catégorie : {currentData.category}</p>
            <div className="tech">
              {currentData ? (
                currentData.technology.map((item, i) => <p key={i}>{item}</p>)
              ) : (
                <p>Erreur...</p>
              )}
            </div>
          </div>
          <nav className="navigation">
            <Btn name={"Code source"} url={currentData.url} />
            <Btn name={"Accéder au site"} />
          </nav>
        </div>
        <h1 className="project-title">Illustrations.</h1>
        <div className="images">
          {currentData ? (
            currentData.images.map((item, index) => (
              <img
                className={`image ${imageStates[index] ? "active" : ""}`}
                onClick={() => handleClick(index)}
                key={index}
                src={item}
                alt=""
              />
            ))
          ) : (
            <p>Erreur...</p>
          )}
        </div>
      </main>
      <Footer data={data.networks} />
    </>
  );
}
export default Project;
