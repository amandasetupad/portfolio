import { beyond, beyondIntro } from "../content/site";

export function Beyond() {
  return (
    <section className="beyond section" id="beyond">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="section-label">
            <span>{beyondIntro.index}</span>
            {beyondIntro.label}
          </p>
          <h2>{beyondIntro.title}</h2>
          <p className="support">{beyondIntro.support}</p>
        </header>
        <div className="collage reveal">
          {beyond.map((item) => (
            <figure className={`frame frame-${item.key}`} key={item.key}>
              <div className="frame-media">
                {item.src ? <img src={item.src} alt={item.alt} loading="lazy" /> : <div className="frame-empty" />}
              </div>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
