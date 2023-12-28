import "./home.scss";
import me from "../../images/me.jpg";
import Button from "../../components/button/button";

function Home() {
  return (
    <main className="main">
      <div className="me">
        <img src={me} alt="me" />
        <Button name={"Follow"} background={"#836A21"} color={"#eeeeee"} />
      </div>
    </main>
  );
}

export default Home;
