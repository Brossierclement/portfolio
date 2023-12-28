import "./App.scss";
import Header from "./assets/components/header/header";
import logo from "../src/assets/images/eye-solid.svg";
import Banner from "./assets/components/banner/banner";
import banner from "../src/assets/images/melancholy.jpg";
import Home from "./assets/pages/home/home";

function App() {
  return (
    <>
      <Header logo={logo} />
      <Banner img={banner} />
      <Home />
    </>
  );
}

export default App;
