import { dataIntro, dataRoom } from "../content/site";

export function DataRoom() {
  return (
    <section className="dataroom section" id="data">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="section-label">
            <span>{dataIntro.index}</span>
            {dataIntro.label}
          </p>
          <h2>{dataIntro.title}</h2>
          <p className="support">{dataIntro.support}</p>
        </header>

        <div className="method-grid reveal">
          {dataRoom.methods.map((method) => (
            <article className="method-card" key={method.title}>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </article>
          ))}
        </div>

        <div className="paper-grid reveal">
          <article className="paper">
            <p className="stamp">{dataRoom.stamp}</p>
            <h3>A subject-line test, as a picture</h3>
            <div className="bars" role="img" aria-label="Illustrative bar chart, not campaign results.">
              {dataRoom.bars.map((row) => (
                <div className="bar-row" key={row.label}>
                  <span className="bar-label">{row.label}</span>
                  <div className="track" aria-hidden="true">
                    <div className="fill" style={{ width: `${row.value}%` }} />
                  </div>
                  <span className="bar-value">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="fine">{dataRoom.barsCaption}</p>
          </article>

          <article className="paper">
            <p className="stamp">{dataRoom.stamp}</p>
            <h3>How I would cut a list</h3>
            <div className="stack" aria-hidden="true">
              {dataRoom.segments.map((segment) => (
                <span key={segment.name} style={{ flexGrow: segment.model }} />
              ))}
            </div>
            <ul className="segment-list">
              {dataRoom.segments.map((segment) => (
                <li key={segment.name}>
                  <strong>
                    {segment.name}
                    <em>{segment.model}</em>
                  </strong>
                  <span>{segment.rule}</span>
                </li>
              ))}
            </ul>
            <p className="fine">{dataRoom.segmentsCaption}</p>
          </article>
        </div>

        <div className="life-wrap reveal">
          <h3>Customer lifecycle, as questions</h3>
          <ol className="life-rail">
            {dataRoom.lifecycle.map((stage, index) => (
              <li key={stage.stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage.stage}</strong>
                <p>{stage.watch}</p>
              </li>
            ))}
          </ol>
        </div>

        <article className="paper curve-card reveal">
          <p className="stamp">{dataRoom.stamp}</p>
          <h3>Retention is a shape, before it is a number</h3>
          <svg viewBox="0 0 360 170" role="img" aria-label="Diagram of two imagined retention shapes. Not measured data.">
            <text x="8" y="18" fill="#22242B" fontSize="11" fontFamily="DM Mono, monospace">
              Still glad to hear from us
            </text>
            <path d="M16 36 C 70 40, 110 58, 160 64 S 250 78, 344 70" fill="none" stroke="#438F89" strokeWidth="2.5" />
            <path
              d="M16 36 C 70 52, 120 96, 180 122 S 270 156, 344 152"
              fill="none"
              stroke="#702D43"
              strokeWidth="2.5"
              strokeDasharray="5 4"
            />
            <text x="250" y="166" fill="#22242B" fontSize="11" fontFamily="DM Mono, monospace">
              time →
            </text>
          </svg>
          <ul className="legend">
            <li>
              <i className="swatch teal" aria-hidden="true" /> A list that is edited
            </li>
            <li>
              <i className="swatch wine" aria-hidden="true" /> A list that is only broadcast to
            </li>
          </ul>
          <p className="fine">
            Drawn to show a belief: relevance changes the slope. These curves are not a chart of anyone’s file.
          </p>
        </article>
      </div>
    </section>
  );
}
