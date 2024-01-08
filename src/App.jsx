import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home/home";
import Project from "./assets/pages/project/project";
import { createContext } from "react";
import { useState, useEffect } from "react";
import Error from "./assets/pages/error/error";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <DataContext.Provider value={data}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
