import "../skill/skill.scss";

function Skill({ data }) {
  return (
    <>
      {data ? (
        <div className="skill">
          <section className="top">
            <img src={data.logo} alt="logo" />
            <h2>{data.title}</h2>
          </section>
          <div className="skill-img">
            {data ? (
              data.language?.map((item, i) => (
                <img key={i} src={item} alt="logo" />
              ))
            ) : (
              <p>Chargement...</p>
            )}
          </div>
          <p>{data.description}</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
}

export default Skill;
