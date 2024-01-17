import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home/home";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data", error));
  }, []);
  return (
    <DataContext.Provider value={data}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
