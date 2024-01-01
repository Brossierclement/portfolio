import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home/home";
import Project from "./assets/pages/project/project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/:id" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
