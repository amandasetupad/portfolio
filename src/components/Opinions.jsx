import { opinions, opinionsIntro } from "../content/site";

export function Opinions() {
  return (
    <section className="opinions section" id="opinions">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="section-label">
            <span>{opinionsIntro.index}</span>
            {opinionsIntro.label}
          </p>
          <h2>{opinionsIntro.title}</h2>
        </header>
        <div className="opinion-list">
          {opinions.map((opinion) => (
            <article className="opinion reveal" key={opinion.number}>
              <span className="opinion-no">{opinion.number}</span>
              <h3>{opinion.title}</h3>
              <p>{opinion.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
