import "../header/header.scss";
import { useContext } from "react";
import { DataContext } from "../../../App";
import Button from "../button/button";
function Header() {
  const data = useContext(DataContext);
  return (
    <header className="header">
      <p className="job">Web Developer</p>
      <div className="about">
        <section className="introduce">
          <h1>I'm Clément</h1>
          <p>
            a budding web developer diving into the coding world. Armed with the
            basics of <span>JavaScript</span> and <span>React</span>, I'm
            concurrently tackling Figma and Redux. Despite facing challenges, I
            persevere with a passion for learning. Outside of coding, I find
            inspiration in the Warhammer universe, adding a touch of creativity
            to my journey.
          </p>
        </section>
        <nav className="networks">
          {data[1] ? (
            data[1].networks.map((item) => (
              <Button
                key={item.id}
                data={item}
                url={item.url}
                logo={item.logo}
              />
            ))
          ) : (
            <p>Error</p>
          )}
        </nav>
      </div>
    </header>
  );
}
export default Header;
