import { about } from "../content/site";

export function About() {
  return (
    <section className="about section reveal" aria-labelledby="about-title">
      <div className="wrap">
        <p className="section-label">
          <span>{about.index}</span>
          {about.label}
        </p>
        <div className="about-head">
          <h2 id="about-title">
            <span>Part strategist.</span>
            <span>Part creative.</span>
            <em>Always curious.</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-prose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <h3 className="side-title">{about.strengthsTitle}</h3>
            <ol className="strengths">
              {about.strengths.map((item, index) => (
                <li className="strength" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="timeline-block">
          <h3 className="side-title">{about.timelineTitle}</h3>
          <ol className="timeline">
            {about.timeline.map((role) => (
              <li className="role-row" key={`${role.role}-${role.dates}`}>
                <span className="dates">{role.dates}</span>
                <span className="role">
                  <strong>{role.role}</strong>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
