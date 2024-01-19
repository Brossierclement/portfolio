import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home/home";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch est une promesse, async await sont recommandés
        const response = await fetch("/data.json");
        // conversion en format JSON
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
    // tableau de dependances vide = unique requête
  }, []);
  // console.log(data);
  return (
    <>
      {data ? (
        <DataContext.Provider value={data}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </DataContext.Provider>
      ) : (
        <p>Error...</p>
      )}
    </>
  );
}

export default App;
